$("#bhide").click(function()
{
    $("img").hide(5000);
});

$("#bshow").click(function()
{
    $("img").show(5000);
});

$("#btoggle").click(function()
{
    $("img").toggle(3000);
});

$("#bfadein").click(function()
{
    $("img").fadeIn(5000);
});

$("#bfadeout").click(function()
{
    $("img").fadeOut(5000);
});

$("#bfadetoggle").click(function()
{
    $("img").fadeToggle(3000);
});

$("#bslideup").click(function()
{
    $("img").slideUp(5000);
});

$("#bslidedown").click(function()
{
    $("img").slideDown(5000);
});

$("#bslidetoggle").click(function()
{
    $("img").slideToggle(3000);
});

$("#bsty1").click(
    function()
    {
        $("p").css("font-size" , "40px");
    }
);

$("#bsty2").click(
    function()
    {
        $("p").html("Hello My name is West bengal");
        $("p").css({"font-size" : "35px" , "color" : "blue" , "background-color" :"yellow"});
    }
);

$("#bsty3").click(
    function()
    {
        $("img").attr("src","tablequestion1.jpg");
        $("p").css({"font-size" : "30px" , "color" : "white" , "background-color" :"red"});
    }
);

$("#bappend").click(
    function()
    {
        var data = " " + $("#data").val();
        $("p").append(data);
    }
);
$("#bprepend").click(
    function()
    {
        var data = $("#data").val() +" ";
        $("p").prepend(data);
    }
);

$("#bafter").click(
    function()
    {
        var data = " " + $("#data").val();
        $("p").after("<h1>" + data+"</h1>");
    }
);
$("#bbefore").click(
    function()
    {
        var data = " " + $("#data").val();
        $("p").before("<h2>" + data+"</h2>");
    }
);

$("#bremove").click(
    function()
    {
        $("p").remove();
    }
);
$("#bempty").click(
    function()
    {
        $("p").empty();
    }
);


$("#f_name").blur(function()
{
    var data = $(this).val();
    if(data=="")
    {
        $("#name_error").html("Name cannot be empty");
        $(this).focus();
    } 
    else
    {
        $("#name_error").html("");
    }
});
$("#l_name").blur(function()
{
    var data = $(this).val();
    if(data=="")
    {
        $("#lname_error").html("Name cannot be empty");
        $(this).focus();
    } 
    else
    {
        $("#lname_error").html("");
    }
});
$("#age").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#age_error").html("Age cannot be empty");
        $(this).focus();
    }else if(parseInt(data)<12 ||parseInt(data)>17)
    {
        $("#age_error").html("Age must be between 12 and 17");
        $(this).focus();
    }
    else
    {
        $("#age_error").html("");
    }
});
$("#email").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#email_error").html("Email cannot be empty");
        $(this).focus();
    }
    else
    {
        $("#email_error").html("");
    }
});
$("#s_class").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#class_error").html("Class cannot be empty");
        $(this).focus();
    }else if(parseInt(data)<8 ||parseInt(data)>12)
    {
        $("#class_error").html("Class must be between 8 and 12");
        $(this).focus();
    }
    else
    {
        $("#class_error").html("");
    }
});
$("#section").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#section_error").html("Section cannot be empty");
        $(this).focus();
    }else if(data!="A" )
    {
        $("#section_error").html("Class must be between 8 and 12");
        $(this).focus();
    }
    else
    {
        $("#section_error").html("");
    }
});
$("#eng").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#eng_error").html("English Marks cannot be empty");
        $(this).focus();
    }else if( parseInt(data)<0 ||parseInt(data)>100)
    {
        $("#eng_error").html("English Marks must be between 0 and 100");
        $(this).focus();
    }
    else 
    {
        $("#eng_error").html("");
    }
});
$("#l_id").blur(function()
{
    var data = $(this).val();
    if(data=="" || data==null)
    {
        $("#l_id_error").html("Login ID cannot be empty");
        $(this).focus();
    }else if( data[0] <"A" || data[0]>"Z")
    {
        $("#l_id_error").html("Login ID must start with an Uppercase Alphabet");
        $(this).focus();
    }
    else 
    {
        $("#l_id_error").html("");
    }
});



$("#g_pass").click(
    function()
    {
        let uuid = self.crypto.randomUUID().substring(28);
        $("#pass").val(uuid);
        $("#pass").attr("type","text");
    }
)

$("input").mouseenter(
    function()
    {
        $(this).css("background-color","green");
    }
);

$("input").mouseleave(
    function()
    {
        $(this).css("background-color","white");
    }
);






