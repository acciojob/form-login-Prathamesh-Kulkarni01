function getFormvalue() {

    const form=document.getElementById("form1")
	 let reqBody = {};
	 Object.keys(form.elements).forEach(key => {
        let element = form.elements[key];
		 if (element.type !== "submit") {
            reqBody[element.name] = element.value;
        }
	 })
alert(`${reqBody['fname']} ${reqBody['lname']}`)
}
