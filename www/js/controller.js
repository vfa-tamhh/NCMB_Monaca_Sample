function initialScreen(language, obj) {
        $('#main-content').html('');
        for(var i = 0 ; i < obj.length; i++) {
            var html = '<div class = "row justify-content-center margin-top-row">';
            html += '<a type="button" class="btn btn-primary btn-width-main" ';
            html += 'href="';
            html += obj[i].template
            html +=  '" id="' + obj[i].id + '">';
            if (language === 'ja') {
                html += obj[i].ja_name;
            } else {
                html += obj[i].en_name;
            }
            html += '</a></div>';
            // Add function to screen
            $('#main-content').append(html);
        }
    }
function initialButton(language, obj) {
    $('#main-content').html('');
    for(var i = 0 ; i < obj.length; i++) {
        var html = '<div class = "row justify-content-center margin-top-row">';
        html += '<button type="button" class="btn btn-primary btn-width-main" ';
        html += 'id = "';
        html += obj[i].id + '">';
        if (language === 'ja') {
            html += obj[i].ja_name;
        } else {
            html += obj[i].en_name;
        }
        html += '</button></div>';
        // Add function to screen
        $('#main-content').append(html);
    }
}
function closeButton(parrent) {
    var close_html = '<div class = "row justify-content-center margin-top-row">';
    close_html += '<a type="button" class="btn btn-primary btn-width-main" href="';
    close_html += parrent;
    close_html += 'index.html">Close</a></div>';
    $('#main-content').append(close_html);
}