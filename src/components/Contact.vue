<template> 
    <div>
        <form name="contact" netlify-honeypot="bot-field" action="/thank-you" method="POST" netlify >
            <h1 id="headerText"> Hire Me!</h1>
             <input type="hidden" name="form-name" value="contact" />
               <p class="hidden">     
                    <label>Don’t fill this out: <input name="bot-field"></label>  
                </p>
            <div class="contact_form">
                <label class="form-label">
                    
                    <input placeholder="Enter name" class="form-field" name="name" type="text">
                   
                </label>

                <label class="form-label">
                    
                    <input placeholder="Enter email " class="form-field" name="email" type="email">
                </label>
                <div>
                    <label for="f"></label>
                    <textarea name="message" id="" cols="30" rows="10"  placeholder="Shoot your shot!"></textarea>
                </div>
              
            </div>

            <button type="submit"> SHOOT &rightarrow; </button>
        </form>

    </div>


</template>


<style scoped lang="scss">  
@import url('https://fonts.googleapis.com/css?family=Mallanna|Roboto+Mono&display=swap');

    .hidden{
        display: none;
    }
    form{
        margin-bottom: 3em;
    }
    form, input, textarea{
        
        font-family: 'Roboto Mono', monospace;
    }
    #headerText{
        text-align: center;
    }

    button{
        padding: 1em;
        cursor: pointer;
        border: none;
        background: var(--bg-primary);
        color: #ffffff;
        border-radius: 5px;
        width: 100%;
    }

    button:hover{
        background: #f8f8f8;
        color: black;
        transition-delay: all ease 0.5s;
    }


    label{
        display: block;
        margin-bottom: 1em;
    }
    input{
        display: block;
        padding: 1ch;
        width: 100%;
        border-radius: 5px;
        border: none;
        font-size: 1em;
        outline: none;
    }

    textarea{
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 1ch;
         font-size: 1em;
         outline: none;
    }

    
</style>