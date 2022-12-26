var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");

            function opentab(tabname){
                for(tablink of tablinks){
                    tablink.classList.remove("skills");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("skills-con");
                }

                event.currentTarget.classList.add("skills");
                document.getElementById(tabname).classList.add("skills-con");
            }