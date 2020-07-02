$(document).ready(function(){
	// if (getSearchParams("mod") ==  'checkout') {
	// 	ongkirGetBiaya();
	// 	checkAsuransi('jne');
	// }

	$('.select2').select2();
	var owl;
	owl = $(".owl-carousel").owlCarousel({
		// loop:true,
		margin:10,
		nav:true,
		dots:true,
		// dotsContainer: '.owl-pagination',
		autoplay:true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	});
	var owl;
	owl = $("#proses-pesan").owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		dots:true,
		// dotsContainer: '.owl-pagination',
		autoplay:false,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:1,
				autoplay:true
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	var owl;
	owl = $("#pesan").owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		dots:true,
		// dotsContainer: '.owl-pagination',
		autoplay:false,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
})
// setInterval(getDataAddr, 3000);


// function getDataAddr() {
// 	$.get('./mod/mod_alamat/get_alamat.php', function(res){
// 		var data = $.parseJSON(res)
// 		$('#pil_negara').val(data[0].negara);
// 		$('#pil_prov').val(data[0].prov);
// 		$('#pil_kot').val(data[0].kota);
// 		$('#pil_addr').val(data[0].address);
// 		$('#kota_tujuan').val(data[0].city);

// 		ongkirGetKotaTujuan(data[0].kota)
// 	});
// }


// collapseIN = function(self)
// {
// 	var el = $(self).parents('.panel-default').find('.panel-collapse')
// 	if (el.hasClass("in")) {
// 		el.removeClass('in')
// 	}else{
// 		el.addClass('in')
// 	}
// }

$('.collapse').on('show.bs.collapse', function (e) {
	$(e.target).parent('div').find('input[type="radio"]').first().prop("checked", true);
	var val = $(e.target).attr('id_addr')
	$("#id_alamat").val(val)
});


// raja ongkir
// ongkirGetKotaTujuan = function(kota)
// {
// 	var kota = kota;
// 	var url  = "./mod/mod_checkout/api_raja_ongkir.php?module=rajaongkir&action=getkota&kota="+kota;
// 	$.get(url, function(res){
// 		var data = JSON.parse(res);
// 		$('#kota_tujuan').val(data.city_id);
// 		$('#text_kota_tujuan').val(data.type+" "+data.city_name);
// 		ongkirGetBiaya();
// 	});
// }

// ongkirGetBiaya = function(url)
// {
// 	var url;
// 	var berat = $('#berat').val($('#QtyKg').val());
// 	$.ajax({
// 		url:  url,
// 		type: 'post',
// 		data: $('#formRajaOngkir').serialize(),
// 		success: function(res) {
// 			var data = JSON.parse(res);
// 			var ongkir_element = $("#response_ongkir");
// 			ongkir_element.find('#kurirOngkir').text(data.kurir)
// 			ongkir_element.find('#kotaasal').text(data.kotaasal+" "+data.provinsiasal)
// 			ongkir_element.find('#kotatujuanOngkir').text(data.kotatujuan+" "+data.provinsitujuan)
// 			ongkir_element.find('#beratOngkir').text(data.berat)

// 			ongkir_element.find('#tblOngkir tbody').html("");
// 			var html = '';
// 			data.cost.forEach(function(item, key){
// 				var checked = key == 0 ? 'checked' : null;
// 				html += '<tr>'
// 				html += '<td>'+item.service+'</td>'
// 				html += "<td align='right'>"+formatRupiah(item.cost[0].value,'')+"</td>"
// 				html += "<td>"+item.cost[0].etd.replace("HARI", "")+" Hari</td>"
// 				html += '<td>'
// 				html += '<label>'
// 				html += '<input type="hidden" name="kurir" id="kurir" value="'+data.kurir+'">'
// 				html += '<input type="hidden" name="price" id="price" value="'+item.cost[0].value+'">'
// 				html += '<div class="ps-radio">'
// 				html += '<input class="form-control" type="radio" id="rdongkir-'+key+'" name="paket_ongkir" onChange="getCostOngkir(this)" '+checked+'>'
// 				html += '<label for="rdongkir-'+key+'"></label>'
// 				html += '</div>'
// 				if (key == 0) {
// 					var elementRadio = '<input type="radio" id="express" name="paket_ongkir">';
// 					getCostOngkir(elementRadio,item.cost[0].value,data.kurir);
// 				}
// 				html += '</label>'
// 				html += '</td>'
// 				html += '</tr>'
// 			});
// 			ongkir_element.find('#tblOngkir tbody').append(html);
// 			$('#ekspedisi').val($('#kurir').val())
// 		}
// 	});
// }

// checkout
// checkAddress = function(self)
// {
// 	var val  = $(self).filter(":checked").val();
// 	ongkirGetKotaTujuan(val)
// }

// getItemPayments = function(self)
// {
// 	var listPayment = $(self).parents('#paymentMethod').find(".listItemsPayment");
// 	$('.listItemsPayment').addClass("hidden");
// 	$('.li-payment').removeAttr('checked');
// 	if ($(self).is(':checked')){
// 		listPayment.removeClass("hidden");
// 		var el = listPayment.find('input[type="radio"]').first().prop("checked", true);
// 		$('#id_method').val($(self).attr('id_method'))
// 	}
// }

// getCostOngkir = function(self, prices = null, kurirs = null)
// {
// 	var prices = prices;
// 	var price  = $(self).parents('td').find("#price").val();

// 	var kurir  = $(self).parents('td').find("#kurir").val();
// 	var total  = $("#total_sum");
// 	price = price == undefined ? prices : price;
// 	kurir = kurir == undefined ? kurirs : kurir;
// 	$('#ongkir').val(price)
// 	pricerp   = formatRupiah(price, '');

// 	var row   = "<tr id='row_ongkir'><th style='color: #fff;border-top: none;'>"+kurir+"</th><th style='color: #fff;border-top: none;text-align: right'>"+pricerp+"</th></tr>";
// 	$('#row_ongkir').remove();
// 	// $("#tableCheckout tfoot tr#first").append(row);
// 	$(row).insertAfter('#tableCheckout tfoot tr#first')

// 	var prices = $('input[name="prices[]"]').map(function () {
// 		return $(this).val();
// 	}).get();
// 	// var maxTotal  = parseInt(prices.reduce(getSumArray, 0)) + parseInt(price);
// 	var maxTotal  = parseInt(prices.reduce(getSumArray, 0));
// 	var sumPrices = maxTotal + parseInt(price); 
// 	$("#totalCheckoutf").val(sumPrices);
// 	var textPrices = formatRupiah(sumPrices)
// 	$("#totalPrice").text(textPrices);
// 	maxTotal = formatRupiah(maxTotal, '');
// 	$(".totalCheckout").text(maxTotal);	
	
// 	$("#text_asuransi").text('0.00')
// 	$("#val_asuransi").val(0)
// 	$("#asuransi").prop('checked', false)
// 	getCredit2(sumPrices);
// }

// cart shopping
totalItem = function(self)
{
	var price = $(self).parent('tr').find('#price').text();
	var total = $(self).parent('tr').find('#totalItem');
	var qty   = $(self).parent('tr');
	var num = parseInt(price) * parseInt(qty);
	total.text(num);
}

updateCartMin = function(produk, self)
{
	var quantity = $(self).parent('div').find('#qty');
	var total    = $(self).parent('div').parent('td').parent('tr').find('td').find('#total');
	var qty_menu = $('#qty_menu');
	var produk   = produk;
	if (quantity.val() <= 1000) {
		alert('Quantity tidak boleh kurang dari 1000');
	}else{
		$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=update_min&qty="+ quantity.val(), function(res){
			var data = JSON.parse(res)
			quantity.val(data.qty);
			qty_menu.text(data.qty);
			total.text(data.total);
			$('#maxTotal').text(data.total);
			$('#price_produk').text(data.price);
		});
	}
}

updateCartAdd = function(produk, self)
{
	var quantity = $(self).parent('div').find('#qty');
	var total    = $(self).parent('div').parent('td').parent('tr').find('td').find('#total');
	var qty_menu = $('#qty_menu');
	var produk = produk;
	$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=update_add&qty="+ quantity.val(), function(res){
		var data = JSON.parse(res)
		quantity.val(data.qty);
		qty_menu.text(data.qty);
		total.text(data.total);
		$('#maxTotal').text(data.total);
		$('#price_produk').text(data.price);
	});
}

removeCartItem = function(produk, self, trans)
{
	var produk   = produk;
	var trans    = trans;
	var table    = $('#tableCart tbody');
	var element  = $(self).parent('td').parent('tr');
	$.get("./mod/mod_cart/proses_cart.php?produk="+produk+"&module=cart&action=delete&notrans="+trans, function(res){
		var data = JSON.parse(res)
		element.remove();
		if (table.children().length == 0) {
			$('#a_proses').css("background-color", "#5cb85c");
			$('#id-ps-cart__promotion').remove();
			$('#text_maxTotal').remove();
			$('#ps-cart__listing').remove();
			$('#a_proses').removeAttr('data-toggle')
			$('#a_proses').removeAttr('data-target')
			$('#a_proses').attr('href','?mod=produk')
			$('#a_proses').text('Lanjutkan Belanja')
			$('#tot_produk').text('0')
			table.html("<tr><td colspan='5' style='text-align: center;'>Tidak ada pesanan</td></tr>");
		}
		$('#maxTotal').text(data.total);
	});
}

addRowCT = function(self)
{
	var table   = $("#tableCT tbody");
	var trlast  = table.find("tr").last();
	var qtylast = trlast.find('input[type="number"]');
	var value   = parseInt(qtylast.val()) / 2;

	var check = hasDecimal(value);
	if (check == 1) {
		Math.ceil(1.4);
	}

	qtylast.val(value);
	table.append("<tr><td><input type='number' value='"+value+"' name='qty[]' class='form-control'></td><td><input type='text' name='text[]' class='form-control'></td><td><center><button onClick='removeItemTable(this)' class='btn btn-danger' style='padding: 1px 5px;'><i class='fa fa-minus'></i></button></center></td></tr>");
}

removeItemTable = function(self)
{
	var table   = $("#tableCT tbody");
	var element = $(self).parents('tr');
	var tr_top  = element.prev().find('input[type="number"]');
	var value   = element.find('input[type="number"]').val();
	var value   = parseInt(value) + parseInt(tr_top.val());

	tr_top.val(value);
	$(self).parents('tr').remove();
}

addCTModal = function(produk, qty)
{
	$('#qty1CT').val(qty)
}


/* Fungsi formatRupiah */
formatRupiah = function(angka, prefix){
	var number_string = angka.toString().replace(/[^,\d]/g, ''),
	split   		= number_string.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}
	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
}

// file upload
// readURL = function(input) {
// 	if (input.files && input.files[0]) {
// 		var reader = new FileReader();
// 		reader.onload = function(e) {
// 			$('.image-upload-wrap').hide();
// 			$('.file-upload-image').attr('src', e.target.result);
// 			$('.file-upload-content').show();
// 			$('.image-title').html(input.files[0].name);
// 		};
// 		reader.readAsDataURL(input.files[0]);
// 	}else{
// 		removeUpload();
// 	}
// }

// removeUpload = function() {
// 	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
// 	$('.file-upload-content').hide();
// 	$('.image-upload-wrap').show();
// }
// $('.image-upload-wrap').bind('dragover', function () {
// 	$('.image-upload-wrap').addClass('image-dropping');
// });
// $('.image-upload-wrap').bind('dragleave', function () {
// 	$('.image-upload-wrap').removeClass('image-dropping');
// });


setAsuransi = function()
{
	var asuransi = parseFloat($('#biaya_asuransi').val())
	var admin    = parseFloat($('#biaya_admin').val())
	var prices   = (parseFloat($('#sumPrices').val()) * asuransi / 100) + admin
	var total    = parseInt($('#totalCheckoutf').val())
	if($("#asuransi").is(':checked')){
		total = total + prices
		total = parseInt(total)
		$("#text_asuransi").text(formatRupiah(prices,''))
		$("#val_asuransi").val(prices)
		$("#totalCheckoutf").val(total)
		$("#totalPrice").text(formatRupiah(total,''))
	}else{
		total = total - prices
		total = parseInt(total)
		$("#text_asuransi").text('0.00')
		$("#val_asuransi").val(0)
		$("#totalCheckoutf").val(total)
		$("#totalPrice").text(formatRupiah(total,''))
	}
	getCredit2(total);
}

// checkAsuransi = function(kurir)
// {
// 	var kurir = kurir
// 	var el
// 	$.get('./mod/mod_checkout/get_asuransi.php?kurir='+kurir).done(function(res){
// 		var data = $.parseJSON(res)
// 		if (data.asuransi == 'Y') {
// 			el  = '<tr>'
// 			el += '<th style="color: #fff;border-top: none;padding-top: 0;padding-bottom: 0">'
// 			el += '<div class="checkbox" style="margin-top: 0;margin-bottom: 0">'
// 			el += '<label>'
// 			el += '<input type="checkbox" value="Y" id="asuransi" onclick="setAsuransi()">Asuransi'
// 			// el += '<input type="hidden" id="val_asuransi">'
// 			el += '<input type="hidden" id="biaya_asuransi" value="'+data.biaya+'">'
// 			el += '</label></div></th>'
// 			el += '<th style="color: #fff;border-top: none;text-align: right;"><span id="text_asuransi">0.00</span></th></tr>'

// 			$(el).insertAfter('#tableCheckout tfoot tr#first')
// 		}
// 	})
// }


// sum value array
getSumArray = function(total, num) {
	return total + Math.round(num);
}

hasDecimal = function(num){
	return !!(num % 1);
}

getSearchParams = function(k){
	// var p={};
	// location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
	// return k ? p[k]:p;
	var segment_str = window.location.pathname; // return segment1/segment2/segment3/segment4
	var segment_array = segment_str.split( '/' );
	var last_segment = segment_array.pop();
	return last_segment;
}

