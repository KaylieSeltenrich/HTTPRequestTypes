function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    
    let tweetData = { 
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
           document.getElementById("Success").innerHTML = "Success!"
        } else if (this.readyState != 4) {
            console.log ("LOADING!");
        } else {
                console.log("SOMETHING WENT WRONG!");
            }
    }
    
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type","application/json");
    ajax.send(JSON.stringify(tweetData));
    
    }
    
      let tweetButton = document.getElementById("tweet-submit");
      tweetButton.addEventListener("click", sendTweet);
    





      function updateTweet() {
        
        let newTweetData = { 
            title: "New title",
            body: "New body",
            userId: 1
        };
        
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.responseText));
            } else if (this.readyState != 4) {
                console.log ("LOADING!");
            } else {
                    console.log("SOMETHING WENT WRONG!");
                }
        }
        
        ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
        ajax.setRequestHeader("Content-Type","application/json");
        ajax.send(JSON.stringify(newTweetData));
        
        }
      
        updateTweet();

    



        function deleteTweet() {
           
            let ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200) {
                    console.log(JSON.parse(this.responseText));
                } else if (this.readyState != 4) {
                    console.log ("LOADING!");
                } else {
                        console.log("SOMETHING WENT WRONG!");
                    }
            }
            
            ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
            ajax.setRequestHeader("Content-Type","application/json");
            ajax.send();
            
            }
          
            deleteTweet();
            


            function getTweet() {
            
                let ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    if(this.readyState == 4 && this.status == 200) {
                      
                      let posts = JSON.parse(this.responseText);
                      

                     for (i = 0; i < posts.length; i++) {
                  
                    let allTweets = document.getElementById("show-tweets");
                     allTweets.innerHTML += "<h3>" + posts[i].title + "</h3>"
                     allTweets.innerHTML += "<p>" + posts[i].body + "</p>"
                     } 

    

                            
                    } else if (this.readyState != 4) {
                        console.log ("LOADING!");
                    } else {
                            console.log("SOMETHING WENT WRONG!");
                        }
                }
                
                ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
                ajax.setRequestHeader("Content-Type","application/json");
                ajax.send();
                
                }

               getTweet();

            
