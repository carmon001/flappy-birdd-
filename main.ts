sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 4 4 4 4 4 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d 1 1 1 1 1 1 1 d d d d d d d d d d 1 1 1 1 1 1 1 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d 1 1 1 1 1 d d 1 1 1 1 1 d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b d d d d d d d d d d d d d d d 1 1 1 1 1 d d 1 1 1 1 1 d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 
9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 
9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 3 3 3 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 3 3 3 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 1 3 3 3 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 3 3 3 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 3 3 3 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 3 3 3 1 1 1 d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d 1 1 1 3 3 3 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 d d 1 1 1 1 d d 1 1 1 d 1 1 1 d 1 1 1 1 d d 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 d d 1 1 1 1 d d 1 1 1 d 1 1 1 d 1 1 1 1 d d 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 d d 1 1 1 1 d d 1 1 1 d 1 1 1 d 1 1 1 1 d d 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 e e e e e e e e e e e e 6 6 7 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 e e e e e e e e e e e e e 6 6 6 6 6 e e e e e e 6 6 6 6 e e e e e 6 6 7 7 7 7 6 6 6 e e e e e e e e 6 7 7 7 7 7 7 7 
e e e e e e e e e e e e e e e 6 6 e e e e e e e 6 6 6 e e e e e e e e 6 6 6 6 6 e e e e e e e e e e e e e e e e 6 6 7 7 7 7 6 6 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 7 7 7 7 7 7 7 7 7 6 6 e e e e e e e e e 6 6 6 7 7 7 6 6 6 e e 6 6 6 7 7 6 6 e e 6 6 7 7 7 7 7 7 7 7 6 6 e e e e e e 6 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e e 6 6 7 6 6 6 e e e 6 6 6 7 7 6 6 6 e e e e 6 6 7 7 7 7 6 6 e e e 6 6 6 6 6 6 6 e e e 6 6 7 7 7 7 7 7 6 6 e 6 6 6 6 6 6 6 e e e e e e e e e e e 6 6 6 6 e e e 6 7 7 7 7 7 7 7 7 7 7 7 6 e e e e e e e e 6 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 6 e e e e e e 6 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e 6 6 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 6 6 6 e 6 6 7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 7 6 6 e 6 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 6 6 e 6 6 6 6 6 6 6 e e 6 7 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 e e e 6 6 6 6 7 7 7 7 7 7 7 7 
e e e e e e e e e e e 6 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 e 6 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 6 6 6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 6 e 6 6 7 7 6 6 7 7 7 7 7 7 7 
e e e e e e e e e e 6 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 6 6 7 7 7 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 6 7 7 7 7 7 7 7 
e e e 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e 6 6 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 6 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 6 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 7 
6 6 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 7 6 6 7 7 7 6 6 7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 6 6 6 7 7 7 6 6 6 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 
6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 6 7 7 6 6 7 7 7 6 6 7 6 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 6 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . . . . 
. . . . . f f 5 5 5 f 1 1 f . . . . . 
. . . . f 5 5 5 5 5 f 1 1 1 f . . . . 
. . f f f f 5 5 5 5 f 1 1 f 1 f . . . 
. f d d d d f 5 5 5 f 1 1 f 1 f . . . 
. f 5 d d d 5 f 5 5 5 f 1 1 1 f . . . 
. f 5 5 5 5 5 f 5 5 5 5 f f f f f . . 
. . f 5 5 5 f 5 5 5 5 f 2 2 2 2 2 f . 
. . . f f f 4 4 4 4 f 2 f f f f f . . 
. . . f 4 4 4 4 4 4 4 f 2 2 2 2 f . . 
. . . . f f 4 4 4 4 4 4 f f f f . . . 
. . . . . . f f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.ay = 300
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topImage = img`
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
`
    } else if (gap == 1) {
        topImage = img`
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
`
    } else if (gap == 2) {
        topImage = img`
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
`
    } else {
        topImage = img`
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
. . f 5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
