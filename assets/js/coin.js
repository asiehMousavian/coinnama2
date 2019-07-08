




$(document).ready(function () {
    $('#hamburger').click(function(){
      $(this).next().css('left','0px');
    });
    $('.close_menu').click(function(){
      $(this).parent().css('left','-250px');
    });
    $('#changeLabel').click(function () {
    $('#convertModal').modal('show');
    return false;
    });

    $('#datatable').DataTable({
      //scrollY:        400,
      "bInfo": false,
      "bLengthChange": false,
      "bFilter": false,
      "columnDefs": [{ "orderable": false, "targets": [0, 1, 5] }],
      scrollX: true,
      fixedColumns: true,
      fixedHeader: true,
      fixedColumns: {
        leftColumns: 1,
        leftColumns: 2
      }
    });

    $(window).resize(function () { location.reload(); });

    $('.myTable tr th').click(function () {
      $(this).find('img').toggle();
    });


   
    $(document).click(function () {
      $(".countryDropDown-wrapper").hide();
      $('.coinDropDown-wrapper').hide();
      $('.modalcountryDropDown-wrapper').hide();
    });

    

    $('.countryInput-Wrapper').on('click', function (e) {
      e.stopPropagation();
      $('.coinDropDown-wrapper').hide();
      $('.countryDropDown-wrapper').toggle();
    });

  

    $('.countryDropDown-wrapper .listItem').on('click', function () {
      var imgSrc = $(this).find('img').attr('src');
      var span1 = $(this).find('.lgSpan').text();
      var span2 = $(this).find('.smSpan').text();
      $('#contryImg').attr('src', imgSrc);
      $('.countryInput-Wrapper #lgSpan').text(span1);
      $('.countryInput-Wrapper #smSpan').text(span2);
      $('.countryDropDown-wrapper').toggle();
    });

    $('.countryDropDown-wrapper  #country-search').on('click',function(e){
      e.stopPropagation();
    });

    $('.coinInput-Wrapper').on('click', function (e) {
      e.stopPropagation();
      $('.countryDropDown-wrapper').hide();
      $('.coinDropDown-wrapper').toggle();

    });

    $('.coinDropDown-wrapper .listItem').on('click', function () {

      var imgSrc = $(this).find('img').attr('src');
      var span1 = $(this).find('.lgSpan').text();
      var span2 = $(this).find('.smSpan').text();
      $('#coinImg').attr('src', imgSrc);
      $('.coinInput-Wrapper #lgSpan').text(span1);
      $('.coinInput-Wrapper #smSpan').text(span2);
      $('.coinDropDown-wrapper').toggle();
    });
    $('.coinDropDown-wrapper  #coin-search').on('click',function(e){
      e.stopPropagation();
    });

//modal dropDown

    $('.modalcountryInput-Wrapper').on('click', function (e) {
      e.stopPropagation();
      $('.modalcountryDropDown-wrapper').toggle();

    });

    $('.modalcountryDropDown-wrapper .modallistItem .modalItem').on('click', function () {
      var imgSrc = $(this).find('img').attr('src');
      var span1 = $(this).find('.modallgSpan').text();
      var span2 = $(this).find('.modalsmSpan').text();
      $('#modalcontryImg').attr('src', imgSrc);
      $('.modalcountryInput-Wrapper #modallgSpan').text(span1);
      $('.modalcountryInput-Wrapper #modalsmSpan').text(span2);
      $('.modalcountryDropDown-wrapper').toggle();
    });

    $('.modalcountryDropDown-wrapper  #modal-search').on('click',function(e){
      e.stopPropagation();
    });



});