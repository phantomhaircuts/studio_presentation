let typeText = [' ', 'H', 'e', 'l', 'l', 'o', ' ', 'C', 'l', 'a', 's', 's', '!', ];
// Print text into Terminal node.
typeText.forEach( (e, index) => { setTimeout( ()=> { document.getElementById('typeText').textContent += e }, index * 600 )});
