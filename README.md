# BLUE_Edtech_MOD_3_Backend



## Aula 13

Nessa aula tratamos de inserir o Controller em nossa aplicação e validar as entradas de dados

- ValidaEntrada

  ```javascript
  function validaEntrada(res,requisicao){
      if(!requisicao.nome){
          return res.status(400).json({message: "nome não foi inserido na requisicao"});
      }else if(!requisicao.imagemUrl){
          return res.status(400).json({message: "a URL da imagem não foi inserida na requisicao"});
      }
  }
  ```

  

- ValidaID

```javascript
function validaID(res,id){
    if(id.length != 24){
        return res.status(400).json({message: "ERROR: O id precisa ter 24 caracteres"});
    }
}
```

