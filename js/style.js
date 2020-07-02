$(document).ready(function(){$('.select2').select2();var owl;owl=$(".owl-carousel").owlCarousel({margin:10,nav:true,dots:true,autoplay:true,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:2},600:{items:4},1000:{items:4}}});var owl;owl=$("#proses-pesan").owlCarousel({loop:false,margin:10,nav:false,dots:true,autoplay:false,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:1,autoplay:true},600:{items:2},1000:{items:4}}});var owl;owl=$("#pesan").owlCarousel({loop:false,margin:10,nav:false,dots:true,autoplay:false,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:2},600:{items:3},1000:{items:6}}});})
$('.collapse').on('show.bs.collapse',function(e){$(e.target).parent('div').find('input[type="radio"]').first().prop("checked",true);var val=$(e.target).attr('id_addr')
$("#id_alamat").val(val)});totalItem=function(self)
{var price=$(self).parent('tr').find('#price').text();var total=$(self).parent('tr').find('#totalItem');var qty=$(self).parent('tr');var num=parseInt(price)*parseInt(qty);total.text(num);}
updateCartMin=function(produk,self)
{var quantity=$(self).parent('div').find('#qty');var total=$(self).parent('div').parent('td').parent('tr').find('td').find('#total');var qty_menu=$('#qty_menu');var produk=produk;if(quantity.val()<=1000){alert('Quantity tidak boleh kurang dari 1000');}else{$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=update_min&qty="+quantity.val(),function(res){var data=JSON.parse(res)
quantity.val(data.qty);qty_menu.text(data.qty);total.text(data.total);$('#maxTotal').text(data.total);$('#price_produk').text(data.price);});}}
updateCartAdd=function(produk,self)
{var quantity=$(self).parent('div').find('#qty');var total=$(self).parent('div').parent('td').parent('tr').find('td').find('#total');var qty_menu=$('#qty_menu');var produk=produk;$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=update_add&qty="+quantity.val(),function(res){var data=JSON.parse(res)
quantity.val(data.qty);qty_menu.text(data.qty);total.text(data.total);$('#maxTotal').text(data.total);$('#price_produk').text(data.price);});}
removeCartItem=function(produk,self,trans)
{var produk=produk;var trans=trans;var table=$('#tableCart tbody');var element=$(self).parent('td').parent('tr');$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=delete&notrans="+trans,function(res){var data=JSON.parse(res)
element.remove();if(table.children().length==0){$('#a_proses').css("background-color","#5cb85c");$('#id-ps-cart__promotion').remove();$('#text_maxTotal').remove();$('#ps-cart__listing').remove();$('#a_proses').removeAttr('data-toggle')
$('#a_proses').removeAttr('data-target')
$('#a_proses').attr('href','?mod=produk')
$('#a_proses').text('Lanjutkan Belanja')
$('#tot_produk').text('0')
table.html("<tr><td colspan='5' style='text-align: center;'>Tidak ada pesanan</td></tr>");}
$('#maxTotal').text(data.total);});}
addRowCT=function(self)
{var table=$("#tableCT tbody");var trlast=table.find("tr").last();var qtylast=trlast.find('input[type="number"]');var value=parseInt(qtylast.val())/2;var check=hasDecimal(value);if(check==1){Math.ceil(1.4);}
qtylast.val(value);table.append("<tr><td><input type='number' value='"+value+"' name='qty[]' class='form-control'></td><td><input type='text' name='text[]' class='form-control'></td><td><center><button onClick='removeItemTable(this)' class='btn btn-danger' style='padding: 1px 5px;'><i class='fa fa-minus'></i></button></center></td></tr>");}
removeItemTable=function(self)
{var table=$("#tableCT tbody");var element=$(self).parents('tr');var tr_top=element.prev().find('input[type="number"]');var value=element.find('input[type="number"]').val();var value=parseInt(value)+parseInt(tr_top.val());tr_top.val(value);$(self).parents('tr').remove();}
addCTModal=function(produk,qty)
{$('#qty1CT').val(qty)}
formatRupiah=function(angka,prefix){var number_string=angka.toString().replace(/[^,\d]/g,''),split=number_string.split(','),sisa=split[0].length%3,rupiah=split[0].substr(0,sisa),ribuan=split[0].substr(sisa).match(/\d{3}/gi);if(ribuan){separator=sisa?'.':'';rupiah+=separator+ribuan.join('.');}
rupiah=split[1]!=undefined?rupiah+','+split[1]:rupiah;return prefix==undefined?rupiah:(rupiah?''+rupiah:'');}
setAsuransi=function()
{var asuransi=parseFloat($('#biaya_asuransi').val())
var admin=parseFloat($('#biaya_admin').val())
var prices=(parseFloat($('#sumPrices').val())*asuransi/100)+admin
var total=parseInt($('#totalCheckoutf').val())
if($("#asuransi").is(':checked')){total=total+prices
total=parseInt(total)
$("#text_asuransi").text(formatRupiah(prices,''))
$("#val_asuransi").val(prices)
$("#totalCheckoutf").val(total)
$("#totalPrice").text(formatRupiah(total,''))}else{total=total-prices
total=parseInt(total)
$("#text_asuransi").text('0.00')
$("#val_asuransi").val(0)
$("#totalCheckoutf").val(total)
$("#totalPrice").text(formatRupiah(total,''))}
getCredit2(total);}
getSumArray=function(total,num){return total+Math.round(num);}
hasDecimal=function(num){return!!(num%1);}
getSearchParams=function(k){var segment_str=window.location.pathname;var segment_array=segment_str.split('/');var last_segment=segment_array.pop();return last_segment;}