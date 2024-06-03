let list = document.querySelector("ul");
let input = document.querySelector("input");

input.addEventListener('keyup', function(e)  {
    if(e.key === 'Enter') {
        // alert("hi");
        
		// prepare new li element for appending
        let newItem = document.createElement("li");
        newItem.textContent = input.value;
        // alert(input.value);
        
        // actually append the new item to the ul
        list.appendChild(newItem);
    }
});