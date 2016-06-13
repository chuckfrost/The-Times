
$.ajax({
    url: "result.json",
    dataType: "json"})
    .success(function(data) {

        var mapping = {
            'Body':{
                update: function(options){
                    options.data.toString().replace('"', '');
                    return options.data.toString().replace('"', '').split(/\s+/).slice(0,30).join(" ");
                }
            },
            'Title': {
                update: function(options){
                    return options.data.split('"').join('');
                }
            },
            'ThumbnailImageId': {
                update: function(options){
                    return 'http://localhost/' + options.data;
                }
            }
        };
        var viewModel = ko.mapping.fromJS(data, mapping);
        ko.applyBindings(viewModel);})
    .error(function(err){
        if(err)
            throw err;
    });


