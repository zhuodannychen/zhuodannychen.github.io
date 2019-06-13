<template>
   <div class="container">
       <h1><span class="terminal_handle">zhuodannychen$ </span>echo "Hello World"</h1>
       <h1>Hello World</h1>
       <h1><span class="terminal_handle">zhuodannychen$ </span>echo "I'm Zhuo (Danny) Chen"</h1>
       <h1>I'm Zhuo (Danny) Chen</h1>
       <h1><span class="terminal_handle">zhuodannychen$ </span>echo "Welcome to My Website"</h1>
       <h1>Welcome to My Website</h1>
       <h1><span class="terminal_handle">zhuodannychen$ </span>Here, we will
       <span class="typed-text">{{ typeValue }}</span>
       <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
       </h1>
       <a target="_blank" href="https://github.com/zhuodannychen"><img src=@/assets/Github-logo.png alt="github" class="icon"/></a>
       <a target="_blank" href="https://www.linkedin.com/in/danny-chen-1414a4147/"><img src=@/assets/linkedin.png alt="linkedin" class="icon"/></a>
       <a target="_blank" href="https://devpost.com/zhuodannychen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><img src=@/assets/devpost.png alt="devpost" class="icon"/></a>
       <a target="_blank" href="https://www.facebook.com/profile.php?id=100011202737974"><img src=@/assets/Facebook.png alt="facebook" class="icon"/></a>
       <a target="_blank" href="mailto:zhuodannychen@gmail.com"><img src=@/assets/email.png alt="email" class="icon"/></a>
   </div>
</template>

<script>
import { setTimeout } from 'timers';
 export default {
   data: () => {
     return {
       typeValue: '',
       typeStatus: false,
       typeArray: ['learn.', 'explore.', 'develop.'],
       typingSpeed: 200,
       erasingSpeed: 150,
       newTextDelay: 2000,//controls time of display
       typeArrayIndex: 0,
       charIndex: 0
     }
   },
   methods: {
     typeText() {
       if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
         if(!this.typeStatus)
           this.typeStatus = true;
         this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
         this.charIndex += 1;
         setTimeout(this.typeText, this.typingSpeed);
       }
       else {
         this.typeStatus = false;
         setTimeout(this.eraseText, this.newTextDelay);
       }
     },
     eraseText() {
       if(this.charIndex > 0) {
         if(!this.typeStatus)
           this.typeStatus = true;
         this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
         this.charIndex -= 1;
         setTimeout(this.eraseText, this.erasingSpeed);
       }
       else {
         this.typeStatus = false;
         this.typeArrayIndex += 1;
         if(this.typeArrayIndex >= this.typeArray.length)
           this.typeArrayIndex = 0;
         setTimeout(this.typeText, this.typingSpeed + 1000);
       }
     }
   },
   created() {
     setTimeout(this.typeText, this.newTextDelay + 200);
   }
 }
 
</script>

<style lang="scss" scoped>
 .container {
  position: relative;
  background: rgba(0, 0, 0, 0.5); //filter, 1 -> more black
  border-radius: 10px;
  border: solid #333 10px;
  padding: 15px;
}
.container:after {
  content: "";
  position: absolute;
  background-image: url(../assets/space.jpg);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8; // 1 -> more image
  background-size: 100% 100%;
}

 h1 {
   font-size: 21px;
   font-weight: normal;
   color: rgb(210,210,210);
   span.typed-text {
     color: yellow;
   }
   span.cursor {
     display: inline-block;
     margin-left: 3px;
     width: 4px;
     background-color: green;
     animation: cursorBlink 1s infinite;
   }
   span.cursor.typing {
     animation: none;
   }
   span.terminal_handle {
       color: green;
   }
 }
 @keyframes cursorBlink {
   49% { background-color: green; }
   50% { background-color: transparent; }
   99% { background-color: transparent; }
 }
 .icon {
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    height: 50px;
    padding-top: 50px;
    padding-left: 50px;
    transition: transform 300ms ease-in-out;
    
    &:hover{
        transform: scale(1.25);
    }
 }
</style>

