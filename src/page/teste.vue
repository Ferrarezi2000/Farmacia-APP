<style scoped></style>
<template>
    <div>
        <!--<facebook-login class="button"-->
                        <!--appId="326022817735322"-->
                        <!--@login="getUserData"-->
                        <!--@logout="onLogout"-->
                        <!--@get-initial-status="getUserData">-->
        <!--</facebook-login>-->

        {{name}}
        <div v-if="picture">
            <img :src="picture.data.url"/>
        {{picture.data.url}}
        </div>

        <div class="fb-login-button" data-max-rows="1" data-size="large"
             data-button-type="continue_with" data-show-faces="false"
             data-auto-logout-link="false" data-use-continue-as="false"
             @onlogin="checkLoginState()"></div>

<button @click="checkLoginState">teste</button>

    </div>
</template>
<script>


    window.fbAsyncInit = function() {
        FB.init({
            appId            : '1996582697249987',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.11'
        });
    };


    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    import facebookLogin from 'facebook-login-vuejs'
    export default {
        name: 'app',
        data() {
            return {
                isConnected: false,
                name: '',
                email: '',
                picture: '',
                personalID: ''
            }
        },
        components: { facebookLogin },
        methods: {
            checkLoginState() {
                console.log('passou')
                FB.getLoginStatus(function (response) {
                    // statusChangeCallback(response)
                    console.log('passou', response)
                })

               FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
                    userInformation => {
                   console.log(userInformation)
                        this.personalID = userInformation.id;
                        this.picture = userInformation.picture
                        this.email = userInformation.email;
                        this.name = userInformation.name;
                    }
                )
            },
            getUserData() {
                this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
                    userInformation => {
                        this.personalID = userInformation.id;
                        this.email = userInformation.email;
                        this.name = userInformation.name;
                    }
                )
            },
            sdkLoaded(payload) {
                this.isConnected = payload.isConnected
                this.FB = payload.FB
                if (this.isConnected) this.getUserData()
            },
            onLogin() {
                this.isConnected = true
                this.getUserData()
            },
            onLogout() {
                this.isConnected = false;
            }
        }
    }
</script>