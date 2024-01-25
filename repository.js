module.exports = function Animal(title, age) {
  self = this
  this.title = title
  this.age = age
  this.behavior = function(behavior) {
    self.__proto__.behavior = behavior    
  }

  return this
}