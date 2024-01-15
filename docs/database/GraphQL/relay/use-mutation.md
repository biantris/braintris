---
id: use-mutation
title: Migrando getMutationCallbacks para useMutationCallbacks
tags:
  - use-mutation
  - relay
  - content
  - notes
  - pt-PR
---

O **getMutationCallback** ele facilita a execução de mutations e é uma solução mais antiga.

Você passava um objeto com algumas informações (nome da mutation, função que é executada com erro, função executada ao completar com sucesso) ele retorna um objeto contendo 2 funções (onCompleted e onError)

ex:
 ```tsx
 const { onError, oncompleted } = getMutationCallbacks ({
    name: 'UserAddOrEditExample',
    showSanckbar,
    afterError: () => {
        setSubmitting(false);
        isHandlingNext.current = false;
    },
    afterCompleted: () => {
        handleNextStep();
        setSubmitting(false);
        isHandlingNext.current = false;
    }
 });

 UserAddOrEditExample.commit(input, onCompleted, onError)
 ```

É passado as funções `onError` e `onCompleted` para a função `commit` que recebe as mesmas e as executa

note:
O **useMutation** é um hook do relay, **useMutationCallbacks** também um hook e uma nova solução para executar uma mutation.

Exemplo do uso do useMutationCallbacks:

```tsx
    const [editUserName] = useMutationCallbacks({
        name: 'UserEditName',
        mutation: 'UserEditNameMutation',
        success: t('Successfully changed user name'),
        error: t('Error editing user name'),
    });
```

Ele retorna uma função `commit`, também se responsibiliza pelo snackbar ( exibe mensagens se você passou no `success` ou no `error`)

**Motivo da refatoração:**
O getMutationCallbacks não é robusto e precisa de muitas linhas de código para chamar a função e ele dificulta muito a leitura. Já o useMutationCallbacks é bem robusto e trata muita abstração, é mais fácil de usar e diferente do getMutationCallbacks ele retorna a função commit.

Com getMutationCallbacks:
```tsx
const mutation = graphql `
    mutation UserEditName ($input: UserEditName!) {
        UserEditName(input: $input) {
            error
        }
    }
`;

const commit = (
    input: UserEditNameInput
    onCompleted: (response: UserEditNameMutationResponse) => void,
    onError: (error: Error) => void,
) => {
    const variables = {
        input,
    }

    commitMutation(Environment, {
        mutation,
        variables,
        onCompleted,
        onError,
    });
};

export default { commit };
```

Com useMutationCallbacks:
```tsx
export const UserEditName = graphql`
    mutation UserEditNameMutation($input: UserEditName!){
        UserEditName(input: $input) {
            error
        }
    }
`;
```

Referências:
- https://relay.dev/docs/api-reference/use-mutation/
- https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/
- old relay: https://relay.dev/docs/v9.0.0/mutations/#simple-example