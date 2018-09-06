function val(){

	if(frm.password.value=="")
	{
		alert("Please enter the password");
		frm.password.focus();
		return false;
	}
	if((frm.password.value).length > 7 )
	{
		alert("password should be until 7 digits");
		frm.password.focus();
		return false;
	}
if(frm.phone.value=="")
{
	alert("Please enter the phone number");
	frm.phone.focus();
	return false;
}
if(isNaN(frm.phone.value))
{
	alert("Invalid phone number");
	frm.phone.focus();
	return false;
}
if((frm.phone.value).length < 10 )
{
	alert("Phone number should be minimum 10 digits");
	frm.phone.focus();
	return false;
}

return true;
}
