# Lcript
A simply script for search todo

[TOC]

## How to use it 
### First all

1.import these scripts in your page.Beside the Bootstarp and the Jquery should be import at all of scripts first.But the style of Bootstrap is not must be.You can use your own css file.

        <!--have to import jquery first-->
        <script type="application/javascript" src="/src/js/jquery/jquery.js"></script>
        <!--import bootstrap-->
        <script type="application/javascript" src="/src/bootstrap/js/bootstrap.min.js"></script>
    
2.Then you can import this script in your page to do Search.

        <!--import search javascript-->
        <script type="application/javascript" src="/src/js/search_box/js"></script>
        
3.Why we should have to import these script?

        Because this script is based on the jquery to do .But you can not have to import the Bootstrap and import what you want a style or theme.
        
### Then,use it in your page

1.The following attributes are required

        //type of get data,ajax or json
        "url":"/admin/tsg_fuzzy_search",
        //bind method to this element
        "el":obj,
        //show your have searched results
        "el_show":".selected_keywords",
        //refresh the search post time(in ms)
        "refresh":200,
        //set your own type for ajax
        "ajaxType":"post",
        //set the show-tab for search results,must be class,ul style
        "showTabStyle":"list-group",
        //li style
        "listGroupItem":"list-group-item"
            
2.You can use it like this in your page,and add this code <code>oninput="test(this)"</code> in your input box.Ofcourse,you can change the <code>"test"</code> to what you want.When you changed it,don't forget change the function's name too, please.

        function test(obj){
            lcript.search_ajax({
                "url":"/admin/tsg_fuzzy_search",
                "el":obj,
                "el_show":".selected_keywords",
                "refresh":200,
                "ajaxType":"post",
                "showTabStyle":"list-group",
                "listGroupItem":"list-group-item"
            })
        }
        
3.If you want to hidden the search-box when you click beside it,you can import these script in your page,and the <code>".selected_keywords"</code> is your show-tab of search results.

        lcript.hidden(".selected_keywords")

### Importent Notes

1.You have to use <code>"keywords"</code> as your ajax request keyword

2.If you want to do something for a search result,you can create a function which name is <code>"choise_one_template"</code>,then make some methods in it.Like this function:

            //Add the selected template to the display bar
            function choise_one_template(obj) {
                //Get the value of the selection
                var template_data = $(obj).text()
                //Making HTML
                var selected_template_html = 
                    "<button type='button' class='btn btn-default template_data' aria-label='Left Align'>"+
                        "<span class='glyphicon glyphicon-remove' aria-hidden='true' onclick='delete_template(this)'></span>"
                        +selected_template+
                    "</button>"
                //Insert HTML into the specified div
                $("#results_2").append(selected_template_html)
            }
            
3.Request: use <code>"keywords"</code> as your request keyword.

4.Response: <code>"data"</code> is must.If your datatype is json in this response, you have to edit the 96 line in search_box.js.

    {   
        "code":"",
        "msg":"",
        "data":""
    }

## Demo to show it

![](https://raw.githubusercontent.com/carolcoral/SaveImg/master/fuzzysearch.gif)