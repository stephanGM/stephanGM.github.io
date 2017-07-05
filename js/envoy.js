var address = CryptoJS.AES.decrypt("U2FsdGVkX1/txqO1fIyvzU7fdnIu/D1v+AMscFHGeJIGjILXqtA6O1WWr7063ozj", "just_cause_i_can");

$(function(){
    $("input[type=submit]").click(function(){
        var request = $.ajax({
            url: 'https://api.sparkpost.com/api/v1/transmissions',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json",
            // data: {
            //     "options": {"sandbox": "true"},
            //     "content": {
            //         "from":{  
            //             "name":"Testing Email",
            //             "email":"sandbox@sparkpostbox.com"
            //         },
            //         "subject": "Thundercats are GO!!!",
            //         "text": "Sword of Omens, give me sight BEYOND sight"
            //     },
            //     "recipients": [{
            //         "address":{
            //             "email": "s.greto-mcgrath@protonmail.com" 
            //         },
            //     }]
            // },
            beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "0abff4032MYAPIKEY28237aabaddff20758587"); 
                    // xhr.setRequestHeader("contentType", "application/json");
            },
            success: function(data){
                alert(data);
            }
        });

        request.done(function(msg) {
            $("#mybox").html(msg);          
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + jqXHR.status );
        });
    });
});

// $.ajax({
//     url: 'https://api.sparkpost.com/api/v1/transmissions',
//     type: 'POST',
//     dataType: 'json',
//     contentType: "application/json",
//     data: {
//         options: {"sandbox": true},
//         content: {
//             "from": "sandbox@sparkpostbox.com",
//             "subject": "Thundercats are GO!!!",
//             "text": "Sword of Omens, give me sight BEYOND sight"
//         },
//         recipients: [{
//             "address": "s.greto-mcgrath@protonmail.com" 
//         }]
//     },
//     beforeSend: function(xhr) {
//             xhr.setRequestHeader("Authorization", "49fdd0917fb89e09dab61dfb9834432981b1c307") 
//     },
//     success: function(data){
//         alert(data);
//     }
// });


// curl -X POST \
//   https://api.sparkpost.com/api/v1/transmissions \
//   -H "Authorization: 49fdd0917fb89e09dab61dfb9834432981b1c307" \
//   -H "Content-Type: application/json" \
//   -d '{
//     "options": {
//       "sandbox": true
//     },
//     "content": {
//       "from": "sandbox@sparkpostbox.com",
//       "subject": "Thundercats are GO!!!",
//       "text": "Sword of Omens, give me sight BEYOND sight"
//     },
//     "recipients": [{ "address": "gacc10101@gmail.com" }]
// }'