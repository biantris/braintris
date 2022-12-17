### Query optimization in MongoDB
- **indexes**: 
- single field index: when filtering by a single field)
- compound field index: when filtering by many fields at the same time
- multikey index: array fields
- text index: full-text search in many fields in same collection
- wildcard index: to handle metadata, schemaless design, filter for fields that you don't know yet
- geospatial index: to filter by location, near, intersection and more
- **batching queries**:

https://www.mongodb.com/docs/manual/core/query-optimization/ </br>
**notes:**
Os índices melhoram a eficiência das operações de leitura reduzindo a quantidade de dados que as operações de consulta precisam processar. Isso simplifica o trabalho associado ao preencimento de consultas no mongoDB.

**Criar um índice para dar suporte a operações de leitura:**
Se seu aplicativo consultar uma coleção em um determinado campo ou conjunto de campos, um índice no campo consultado ou um índice composto no conjunto de campos pode impedir que a consulta verifique toda a coleção para localizar e retornar os resultados da consulta.

https://emptysqua.re/blog/optimizing-mongodb-compound-indexes/
#### Range Query
BasicCursor: significa que o mongoDB teve que fazer uma varredura completa pela coleção. Isso não funcionará quandoeu tiver milhões de dados iria ficar bastante lento, então adiciono um índice no campo pesquisado

BtreeCursor + nome do índice: o "nscanned" caiu de 4 para 3, porque o mongo usou um índice para ir diretamente aos documentos necessários, pulando aquele cujo timestamp está fora do intervalo.

Para consultas indexadas, `nscanned é o número de _chaves de índice_ no intervalo que o Mongo escaneou` e `nscannedObjects` é o número de _documentos_ que foram examinados para chegar ao resultado final.

`nscanned >= nscannedObjects >= n`
`nscanned = nscannedObjects = n`

Para consultas simples, você deseja que os três números sejam iguais. Isso significa que você criou o índice ideal e o Mongo o está usando.

#### Equality Plus Range Query
A ordem é importante nos índices compostos do MongoDB, como em qualquer banco de dados. Se eu fizer um índice com "anônimo" primeiro, o Mongo pode pular direto para a seção do índice com comentários assinados e, em seguida, fazer uma varredura de intervalo do timestamp 2 a 4.

- testes de igualdade antes dos filtros de intervalo

Vamos considerar se valeu a pena incluir "anônimo" no índice. Em um sistema com milhões de comentários e milhões de consultas por dia, reduzir o nscanned pode melhorar consideravelmente o rendimento.


