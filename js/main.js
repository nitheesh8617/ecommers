fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	//console.log(info.mobiles[info.mobiles.length-1])
	//var d=document.getElementsByClassName("div")
	//var element=document.querySelectorAll(".div")
	//var bodyElement=document.querySelector("body")
	//var newElement=document.createElement("form")
	//newElement.textContent="abd"
	//var sampleElement=document.createElement("img")
	//sampleElement.src="img/1.jpg"
	//console.log(newElement)
	//bodyElement.append(newElement)

	//var sampleElement=document.createElement("img")
	//sampleElement.src="img/1.jpg";
	//sampleElement.classList.add("class1","class2","class3")

	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-create")
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(column)
		//card
		var card=document.createElement("div");
		card.classList.add("card")
		//card body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name

		//name

		var name=document.createElement("h3");
		name.textContent=value.name;
		cardBody.append(name)
		name.classList.add("text-center", "text-primary","text-block")
		
		var price=document.createElement("p");
		price.classList.add("text-secondary","text-center")
		price.innerHTML="<s>₹"+value.originalprice+"/- </s>";
		
		var oPrice=document.createElement("p");
		oPrice.textContent=value.price;
		oPrice.classList.add("text-center","text-danger")

		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2")

		var button=document.createElement("button");
		button.classList.add("btn","btn-primary");
		button.textContent="Add to cart"


		cardBody.append(name)
		cardBody.append(imageElement)
		cardBody.append(price)
		cardBody.append(oPrice)
		cardBody.append(buttonParent)
		cardBody.append(button)
		card.append(cardBody);
		column.append(card);
		
	})

}