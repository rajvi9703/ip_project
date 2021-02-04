function test()
{
	

	if( document.myform.name.value=="")
	{
		alert("PLAESE ENTER YOUR NAME !!");
		return false;
	}
	

if(document.myform.email.value=="")
{
	alert("PLAESE ENTER YOUR EMAIL ID");
	return false;
}


if( document.myform.pass.value=="")
{
	alert("ENTER YOUR PASSWORD ");
	return false;
}
else
{
	//function test()
	//var a="Name :"+document.form2.name.value+" \n" + "Roll :"+document.form2.roll.value +"\n"  +"Branch :"+ document.form2.branch.value;
	//alert(a);
	alert("SUBMITTED SUCCESSFULLY !!");
	return true;
}
}
