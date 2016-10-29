////////////////////////////////
// text('string') - replace the contents of all currently matched elements with text
//                - this differs from .html() because .text() prevents html from being added to the page
// usage - $('p').text('<b>Replaced!</b>');

public.prototype.text = function(content)
{
    if(content === null || content === undefined){

		var children = this.elements[0].childNodes;
	console.log(children);
		for(var i = 0; i< children.length -1;i++){
		   if( children[i].nodeName === "#text"){
		   	return children[i].nodeValue.replace(/^\s+|\s+$/g, '');;
		   }
		 
		}
		
    }
    else
    {
        // Loop through current elements
        this.forEach(this.elements, function(element)
        {
            element.innerHTML = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        });

        return this;
    }
}
