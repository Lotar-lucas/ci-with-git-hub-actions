# Curingas de rota 
Rotas baseadas em padrões também são suportadas. Por exemplo, o asterisco é usado como curinga e corresponderá a qualquer combinação de caracteres.

´´´´
  code ->
  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }
´´´

O 'ab*cd'caminho da rota corresponderá a abcd, ab_cd, abecde assim por diante. Os caracteres ?, +, *e ()podem ser usados ​​em um caminho de rota e são subconjuntos de suas contrapartes de expressão regular. O hífen ( -) e o ponto ( .) são interpretados literalmente por caminhos baseados em strings.


# Parametros de Rota

Rotas com parâmetros devem ser declaradas após quaisquer caminhos estáticos. Isto evita que os caminhos parametrizados interceptem o tráfego destinado aos caminhos estáticos.