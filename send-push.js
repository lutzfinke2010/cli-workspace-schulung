const webpush = require('web-push');

const options = {
    vapidDetails: {
        subject: 'http://127.0.0.1:8080',
        publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
        privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
    },
    TTL: 5000
};

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dWDL-DwmLDU:APA91bHQrS4O31SMFuJA6iNkN-jSnH-iKcozL87fj08KJRMNzNjDE1aEnyIarDNgIWCUgNOcH56QuL1_tteYsLfvuXViymtHqx2tS9LuX7ErP-PYY9nBWLtJevunyAsFwTmB1Vcz0_fA","expirationTime":null,"keys":{"p256dh":"BN15HZCnUwgnsfAoPThjMusuoN7WrMEHXPMWL8FkICRYLB_XOs01MN8fEQiYERKv14t4J9ayU3DLd9ipg8zCVQE","auth":"WhWyuvO4odE_ocdmssJ-Gg"}};

const payload = JSON.stringify({
    notification: {
        title: 'Your Gate Changed',
        body: 'Your Gate is now G62',
        icon: './assets/img/tim_80x80.png',
        data: 'additional data'
    }
});

webpush.sendNotification(
    pushSubscription,
    payload,
    options
);
