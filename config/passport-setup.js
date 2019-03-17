const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('./key');
passport.use(
    // option for the google strat
    new GoogleStrategy({
        callbackURL:'auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        //passport callback function 
        console.log('callback calling');
    })
);