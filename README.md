# Lcript

A simple script for HTML to do.Welcome to propose your suggestions or opinions！

[TOC]

### Version:0.1
#### Features
        
1.<a href="#fuzzy_search_ajax">Fuzzy search for ajax</a>

2.<a href="#fuzzy_search_ajax">Highlighted Search results</a>

3.<a href="#hidden_click">Click blank to hide search results</a>

4.<a href="#strim">Remove the white space on both sides of the string</a>

5.<a href="#alert_text">Pop up the text text in the specified element</a>

## How to use

* Use it in HTML
```
        <script type="application/javascript" src="/src/js/lcript.js"></script>
```
* Use it in NodeJS/Webpack
```
        import lcript from './lcript'
        window.lcript.alert('.test')
```
* Also,you can use this to ini it not always to cretae the same code.
```
        var lcript = window.lcript
        lcript.alert('.test')
```

## <a id="fuzzy_search_ajax">1.Fuzzy search for ajax</a>
### 1.1 First all

1.Import these scripts in your page.Beside the Bootstarp and the Jquery should be import at all of scripts first.But the style of Bootstrap is not must be.You can use your own css file.

```
        <!--have to import jquery first-->
        <script type="application/javascript" src="/src/js/jquery/jquery.js"></script>
        <!--import bootstrap-->
        <script type="application/javascript" src="/src/bootstrap/js/bootstrap.min.js"></script>
```

2.Then you can import this script in your page to do Search.

```
        <!--import search javascript-->
        <script type="application/javascript" src="/src/js/search_box/js"></script>
```

3.Why we should have to import these script?

        Because this script is based on the jquery to do .But you can not have to import the Bootstrap and import what you want a style or theme.
        
### 1.2 Then,use it in your page

1.The following attributes are required

```
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
```

2.You can use it like this in your page,and add this code <code>oninput="test(this)"</code> in your input box.Ofcourse,you can change the <code>"test"</code> to what you want.When you changed it,don't forget change the function's name too, please.

```
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
```

### 1.3 Importent Notes

1.You have to use <code>"keywords"</code> as your ajax request keyword

2.If you want to do something for a search result,you can create a function which name is <code>"choise_one_template"</code>,then create some methods in it.Like this function:

```
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
```

3.Request: use <code>"keywords"</code> as your request keyword.

4.Response: <code>"data"</code> is must.If your datatype is json in this response, you have to edit the 102 line in lcript.js.

```
    {   
        "code":"",
        "msg":"",
        "data":""
    }
```

### 1.4 Demo to show it

![](https://raw.githubusercontent.com/carolcoral/SaveImg/master/lcript.gif)

## <a id="hidden_click">2.Click blank to hide search results</a>

If you want to hidden the search-box when you click beside it,you can import these script in your page,and the <code>".selected_keywords"</code> is your show-tab of search results.

```
        lcript.hidden(".selected_keywords")
```

## <a id="strim">3.Remove the white space on both sides of the string</a>

If you want to pop the text content of the specified element, you can use this method <code>lcript.trim(str)</code> to do it.

```
        input:
            lcript.trim("   test   ")
        output:
            "test"
```

## <a id="alert_text">4.Pop up the text text in the specified element</a>

If you want to pop the text content of the specified element, you can use this method <code>lcript.alert(element)</code> to do it.

```
        input:
            lcript.alert(".selected_keywords")
        output:
            "test"
```
