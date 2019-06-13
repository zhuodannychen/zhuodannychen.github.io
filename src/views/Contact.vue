<template>
    <div class="contact">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width-device-width, initial-scale=1.0">
        <meta name="description" content="contact form">
        <title>Contact Form</title>
        <form class="gform pure-form pure-form-stacked" method="POST" 
  action="https://script.google.com/macros/s/AKfycbzzOhQpdmqlWjMVbmiMq08ezfd-SEy2INZOyFoc/exec">

  <!-- "https://script.google.com/macros/s/AKfycbzzOhQpdmqlWjMVbmiMq08ezfd-SEy2INZOyFoc/exec" -->
    <!-- change the form action to your script url     data-email="example@email.net"-->
    <div class="content">
        <h1>Get in Touch</h1>
        <h3>Thanks for visiting my website!</h3>
    </div>
    <div class="form-elements">
      <fieldset class="pure-group">
        <label for="name">Name (required)</label>
        <input class="input_stuff" required id="name" name="name" />
      </fieldset>

      <fieldset class="pure-group">
        <label for="message">Subject</label>
        <input class="input_stuff" id="subject" name="subject"
        placeholder="What's on your mind..." />
      </fieldset>

      <fieldset class="pure-group">
        <label for="message">Message (required)</label>
        <textarea class="input_stuff_text" id="message" name="message" rows="10"
        required placeholder="What's on your mind..."></textarea>
      </fieldset>

      <fieldset class="pure-group">
        <label for="email"><em>Your</em> Email Address (required)</label>
        <input class="input_stuff" id="email" name="email" type="email" value=""
        required placeholder="someone@email.com"/>
      </fieldset>

      <button class="button_stuff">
        <i class="fa fa-paper-plane"></i>&nbsp;Send</button>
      <input class="button_stuff" type="reset" value="Reset">
    </div>
    <!-- Customise the Thankyou Message People See when they submit the form: -->
    <div class="thankyou_message" style="display:none;">
      <h2><em>Thanks</em> for stopping by!
        I will get back to you as soon as possible!</h2>
    </div>
    </form>
    </div>
</template>

<script data-cfasync="false" type="text/javascript" src="@/router/form_submission_handler.js">
export default {

}
</script>

<style lang="sass" scoped>
.content
    padding: 5px
    background: #222
    border-radius: 10px
    height: 150px
    align-items: center
    margin: 30px
.contact h1
    font-size: 30px
    text-align: center
.contact h3
    font-size: 15px
    text-align: center
.contact
    background: #333
    color: rgb(210,210,210)
    border-radius: 10px
    padding: 10px

.pure-group
    border: 0
.input_stuff
    font-size: 15px
    display: block
    width: 100%
    height: 20px
    background: rgb(210,210,210)
    color: rgb(50, 50, 50)
    border: 1px solid rgb(50, 50, 50)
.input_stuff_text
    font-size: 15px
    display: block
    width: 100%
    height: 100px
    background: rgb(210,210,210)
    color: rgb(50, 50, 50)
    border: 1px solid rgb(50, 50, 50)
.button_stuff
    width: 100px
    padding: 10px
    border-radius: 10px
    background: rgb(210, 210, 210)
    color: #222
    border: 3px solid rgb(50, 50, 50)
    margin-left: 12px
    cursor: pointer
    text-align: center
    transition: background 300ms ease-in-out
    &:hover
        background: rgb(100,100,100)
</style>
