// function check_event_handler(box){
    // const checkbox=e.target;
    // let checked_list_text=box.parentNode.nextSibling.nextSibling;
    // console.log(checked_list_text)
    
    // if(box.checked){
    //     checked_list_text.setAttribute('class','checked-list-text');    
    // } else{
    //     checked_list_text.removeAttribute('class','checked-list-text');
    // }
    // }

function submit(box){
    let form=box.parentNode

    form.submit();
}