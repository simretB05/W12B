


//POST REquest
//added a success function if response for POST request is successful and show a message
function success( response ){
      //  selected an html element to display the success of the post operation
let get_main = document.querySelector( `#main` )
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>Your Post request is recived</h3>` )
    console.log(response)
}
// failure function to display if the resturned data is not proper for
//  many http request falior resons
function failure(error) {
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
}
function sendComment( details ){
//selected all the input elements using querySelector and got
//  there value using the value attribute for inputs
    let title_input = document.getElementById(`title_input` )
    let title_value = title_input[`value`]
    let comment_input = document.getElementById(`comment_input` )
    let comment_value = comment_input[`value`]
    let id= document.getElementById(`id_input`)
    let id_value = id[`value`]

// used axios get method to POST data to the testing API
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: title_value,
            body: comment_value,
            userId:id_value
        }
    }).then(success).catch(failure);
}

// used an event listener on a button for submiting values to POST Method
let submit_btn = document.querySelector( `#submit_btn` )
submit_btn.addEventListener( `click`, sendComment )
    


// PATCH REquest
function successPatch(response ){
    get_main.insertAdjacentHTML(`afterbegin`,`<h3>Your Patch request is recived</h3>`)
}
// added a falurPatch function if the response didnt come for many resons
function failurePatch(error) {
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
}
//added a patchPost function if response for POST request is successful and show a message 
// selected the title_value to update the existing title_value value in the poast API
function patchPost( details ){
    let title_value = title_input[`value`]

   
    //used axios to send a PATCH method to the testing API 
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {
            title: title_value,
           
        }
        }).then(successPatch).catch(failurePatch);

    }

// used  event-listener to send the Patch request with a button
let patch_btn = document.querySelector(`.patch_post` )
patch_btn.addEventListener( `click`, patchPost )


// DELETE REquest
//used a deletepost function to delete a post from the testing API if its
//  deleted show message if not  call the falureDelete function message
function deletePost( details ){
    function successDelete(response ){
        get_main.insertAdjacentHTML(`afterbegin`,`<h3>Poast has been deleted</h3>`)
    }
    function failureDelete(error) {
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
    }
//used axios to send a delete request to the testing API
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: 'DELETE',      
}).then(successDelete).catch(failureDelete);

}

// used  event-listener to send the Delete request with a button
let delete_btn = document.querySelector(`.delete_post` )
delete_btn.addEventListener( `click`, deletePost )

//GET REquest 
// used the successGet function to loop through 
// the response data aray and display the result dynamically
function successGet( response ){
    
    for ( let i = 0; i< response[`data`].length; i++ ){
        get_main.insertAdjacentHTML( `afterbegin`,
            `<h3>${ response[`data`][i][`title`] }</h3>
            <p>${ response[`data`][i][`body`] }</p>` )
    }
    }
   
// failureGet function to display if the resturned data is not proper for many http request falior resons
function failureGet(error) {
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
}
//  used axios to get a post data using get  jasonplaceholder test API
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`,
   
    
} ).then( successGet ).catch( failureGet ); 


//BONUS
// I tried to loop through the first data array from the response and get each comment and loop through them
// but it didnt work couldn't get the values properly 

//GET REquest for comments inside post 
function successPostComments(response) {
    for ( let i = 0; i < response.data.length; i++ ){
        // selected an html element to display the success of the post operation
        let get_main = document.querySelector( `#main` )

      get_main.insertAdjacentHTML(`afterbegin`,
        `<div class="main-card"><h3>${response.data[i][`title`]}</h3>
        <p>${response.data[i][`body`]}</p></div>`
      );
      
        //GET REquest 
        // used the successGet function to loop through 
        // the response data aray and display the result dynamically
        function successGetTwo( response ){
            // selected an html element to display the success of the post operation
            for ( let x = 0; x < response[`data`].length; x++ )
            {
                let get_mainCard = document.querySelector( `.main-card` )

                get_mainCard.insertAdjacentHTML( `beforeend`,
                `<div><h3>${response.data[x][`name`]}</h3>
                <p>${ response.data[x][`email`]}</p>
                <p>${ response.data[x][`body`]}</p>
                <p>${ response.data[x][`id`]}</p></div>` )
            }
    }
    
       // failureGet function to display if the resturned data is not proper for many http request falior resons
        function failureGetTwo( error ){
      // selected an html element to display the success of the post operation
        let get_main = document.querySelector( `#main` )

        get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
    }
            //  used axios to get a post data using get  jasonplaceholder test API
        axios.request({
            url: `https://jsonplaceholder.typicode.com/posts/1/comments/`,
        
            
        } ).then( successGetTwo ).catch( failureGetTwo ); 
                
            }
            }
        
        
        function failurePostComments( error )
        {
      // selected an html element to display the success of the post operation
        let get_main = document.querySelector( `#main` )

        get_main.insertAdjacentHTML( `afterbegin`, `<h3> try again</h3>` );
  }
  
        axios.request({
            url: `https://jsonplaceholder.typicode.com/posts/`,
        } ).then( successPostComments ).catch( failurePostComments );
        
       