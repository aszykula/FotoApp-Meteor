var czyscForm = function()
{
  $('#autor').val("");
  $('#link').val("");
  $('#opis').val("");
}


Album = new Meteor.Collection('album');

if (Meteor.isClient)
{
  Template.main.Album = function()
  {
    return Album.find();
  }

  Template.main.events({
    'click input.btn' : function ()
    {
      var autor = $('#autor').val();
      var link = $('#link').val();
      var opis = $('#opis').val();
        if(autor!="")
          if(link!="" && link.indexOf("http:\\")===0)
            if(opis!="")
                {
                    Album.insert({autor:autor,link:link,opis:opis});
                    czyscForm();
                }
            else
            {
              alert("Wypełnij opis");
            }
          else
          {
            alert("Podaj prawidłowy link do zdjęcia na www.\n\n Link do zdjęcia musi być w postaci:\n'http:\\\\adresstrony.com\\zdjecie.jpg'");
          }
        else
        {
          alert("Podaj swój nick");
        }
    }
  });
}

if (Meteor.isServer) {
  
}