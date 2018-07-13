/*!
 * Includes jquery.js
 *
 * Copyright LXW@CarolCoral
 * https://github.com/carolcoral/Lcript
 *
 * Date: 2018-07-12
 */
(function(){
    function _lcript(obj){
        this._obj = document.getElementById(obj);
    }
    _lcript.prototype = {
        text:function(str){//获取innerText
            return this._obj.innerText;
        }

    };

    //put all tools in these function
    _lcript.fn={};

    //empty the str space
    _lcript.fn.trim=function(str){
        return str.replace(/(^\s*)|(\s*lcript)/g,'');
    };

    //alert the text content which is you had choised
    _lcript.fn.alert = function(element){
        var vla_element = $(element).text()
        return alert(vla_element)
    }

    //click beside to hidden the search box
    _lcript.fn.hidden = function (element) {
        $(document).click(function(e){
            var _con = $(element);   // 设置目标区域
            if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
                // todo
                $(element).css("display","none")
            }
        });
    }
    
    //search tool
    _lcript.fn.search_ajax = function ({
                //type of get data,ajax or json
                "url":url,
                //set the data type,json or str
                // "dataType":json,
                //bind method to this element
                "el":obj,
                //show your have searched results
                "el_show":el_show,
                //refresh the search post time(in ms)
                "refresh":refresh,
                //set your own type for ajax
                "ajaxType":ajaxType,
                //set the show-tab for search results,must be class,ul style
                "showTabStyle":showTabStyle,
                //li style
                "listGroupItem":listGroupItem
            })
    {
        // Determine whether the contents of the input box are empty
        if ($(obj).val().length == 0){
            $(el_show).css("display","none")
            var selected_keywords = $(el_show)
            selected_keywords.empty()
        }else{
            var index = window.setInterval(function () {
                // Get search keywords
                var serach_keywords = $(obj).val()
                //create a show-tab for search results
                var list_template = "<ul class='"+showTabStyle+"'></ul>"
                var showTabStyleClass = "."+showTabStyle
                //Execute fuzzy query function, delay refresh
                $.ajax({
                    type: ajaxType,
                    url: url,
                    data: {
                        "keywords": serach_keywords
                    },
                    dataType: "json",
                    success: function (data) {
                        $(el_show).css("display", "block")
                        $(el_show).html(list_template)
                        $(showTabStyleClass).empty()
                        var data = data["data"]
                        //Determine whether there is a search result
                        if(data == "" || data == null) {
                            $(showTabStyleClass).append("<li class='"+listGroupItem+"'>Can not find any useflly results !</li>")
                        }
                        else{
                            $.each(data, function (i, data) {
                                // if your data'data is json,you should edit here to make your really data
                                //data = data["value"]
                                var html_style = "<a href='javascript:'><li class='"+listGroupItem+"' onclick='choise_one_template(this)'>" + data + "</li></a>"
                                $(showTabStyleClass).append(html_style)
                            })
                        }

                        //Clear the current interval
                        window.clearInterval(index)
                    },
                    fail: function () {
                        alert("Search failed !")
                    }
                })
                //    延时200ms
            }, refresh)
        }
    }



    var lcript;
    window.lcript=lcript=function(obj){
        return new _lcript(obj);
    };
    //copy _lcript.fn  properties in lcript
    for(var prop in _lcript.fn){
        lcript[prop]=_lcript.fn[prop];
    }
})();