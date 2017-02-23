## Aula 2

### Scope
* ```{{1 + 1}}```
* ```$scope.nome``` e ```{{nome}}```
* Problema:
```
<div ng-controller="MainCtrl">
  {{ nome }}
  <div ng-controller="OutroCtrl">
    {{ nome }}
    <div ng-controller="MaisOutroCtrl">
      {{ nome }}
    </div>
  </div>
</div>
```
* Solução
```
<div ng-controller="MainCtrl">
  {{ nome }}
  <div ng-controller="OutroCtrl">
    Scope nome: {{ nome }}
    Parent nome: {{ $parent.nome }}
    <div ng-controller="MaisOutroCtrl">
      {{ nome }}
      Parent nome: {{ $parent.nome }}
      Parent parent nome: {{ $parent.$parent.nome }}
    </div>
  </div>
</div>
```
* ControllerAs
  - ```var vm=this;```
  - ```return {};```

### Directives
Já vistas
* ngApp
* ngController
* ngView

De hoje
* ngModel
  - input
  - checkbox
* ngShow e ngHide
* ngClick
