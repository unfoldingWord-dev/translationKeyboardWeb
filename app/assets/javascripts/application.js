// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap
//= require bootstrap-select
//= require edit_key
//= require new_keyboard
//= require jquery-ui
//= require autocomplete-rails



var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}


$('#keyboard_lang').autocomplete("option", "appendTo", ".modal-dialog");

$(document).on('show.bs.modal', '#region_code_modal', function(event) {
    var region_name = $(event.relatedTarget).attr('data-id');
    $('#region_name').empty();
    $('#region_name').append(region_name+" Region Codes");
    //var array = $(event.relatedTarget).attr('data-source');
    var obj = $.parseJSON($(event.relatedTarget).attr('data-source'));
    var count = obj.length;
    var per_column = Math.floor(count/3);
    var item_count = 0;
    var total_item_count = 1;
    var string = '';
    $('#code_list').empty();
    $.each(obj, function( i, val ) {
        if(item_count == 0) {
            string += "<ul class='list-unstyled col-md-4'>";
        }
        string += "<li><a href='../../region/"+val+"'>"+getCountryName(val)+"</a></li>";
        if(item_count == per_column || total_item_count == count) {
            string += "</ul>";
            item_count = 0;
        }else {
            item_count += 1;
        }
        total_item_count += 1;

    });
    $('#code_list').append(string);

    //var packet_stage_id =  $(event.relatedTarget).attr('data-woid');
});

function update_region_name(keyboard_id,btn_id,page_type)
{
	var index = $(btn_id).attr('id');
	var reg_name = $('#iso_region_'+index).val();
	$.ajax({
		    type: "POST", 
		    url: "/save_region_name",
		    data: {id: keyboard_id,region:reg_name,type: page_type},
		    success: function(response) {
                $('#accordion').empty();
                $('#accordion').append(response);
		    }
	});
}

function update_unicode_url(language_id)
{
    var unicode_url = $('#unicode_search_url').val()
    if (unicode_url.trim() == '') {
        alert('Please enter url');
        return false
    }else if (!is_valid_url(unicode_url)) {
        alert('Please enter valid url');
        return false
    }

    $.ajax({
        type: "POST",
        url: "/save_unicode_url",
        data: {id: language_id,url:unicode_url},
        success: function(response) {
            if (response == true) {
                alert('Unicode Search Url successfully Updated');
            }
        }
    });

}
//For validating url format
function is_valid_url(url)
{
    return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

ready = function(){
	

    var btnClick = function() {

        var currentText = $(".type-area-textarea").val();
        var newText;
        if ($(this).attr("data-char")) {
            newText = $(this).attr("data-char");
        } else {
            newText = $(this).html();
        }

        if (newText != " ") {
            newText = newText.trim()
        }
        if (newText == "&nbsp;") {
            return; // do nothing
        }
        $(".type-area-textarea").val(currentText + newText);
    };
    /*
    $(".shift-btn").mousedown(function(){
        $(".keyboard .row .col-xs-1 > .btn").each(function(){
            var shiftChar = $(this).parent().find(".shift").text();
            $(this).text(shiftChar);
        });
    });
    $(".shift-btn").mouseup(function(){
        $(".keyboard .row .col-xs-1 > .btn").each(function(){
            var defaultChar = $(this).parent().find(".default-char").text();
            $(this).text(defaultChar);
        });
    });
    */
    $(".shift-btn").click(function(){
        if(!$(this).hasClass("btn-danger")){
            $(".keyboard .row .col-xs-1 > .default-key").each(function(){
                var shiftChar = $(this).parent().find(".shift").text();
                $(this).text(shiftChar);
            });
            $(".shift-btn").addClass("btn-danger");
        } else {
            $(".keyboard .row .col-xs-1 > .default-key").each(function(){
                var defaultChar = $(this).parent().find(".default-char").text();
                $(this).text(defaultChar);
            });
            $(".shift-btn").removeClass("btn-danger");
        }
    });
    $(".col-xs-1").has(".long-press").each(function(){
        $(this).find(".long").popover({
            html:true,
            placement:'top',
            title:"Long Press",
            trigger: 'click',
            content:function(){
                return $(this).parent().find(".long-press").html();
            }
        }).parent().delegate(".popover .btn", "click", btnClick);
    });

    $(".keypress:not(.shift-btn)").click(btnClick);

    $("#selected_keyboard_variant_id").change(function(){
        window.location = "/keyboard/variant/" + $(this).val();
    });

    $(".edit-key-btn").hide();
	
    // For movement of keys
    $( ".button-div" ).sortable({
	       	cancel: false,
		start: function(event, ui) {
			$(this).addClass('noclick');
			//console.log('start: ' + ui.item.index())
			start_order =  ui.item.index();
			$('.samplediv').removeClass('ui-sortable-handle');
		},
		stop: function(event, ui) {
				$('.samplediv').removeClass('ui-sortable-handle');
				var number_of_keys = 0;
				var row_index = 0;
				var divId = $(this).attr('id');
				//console.log(divId);
				var div_array = "";
				div_array = divId.split("_");
				no_of_keys = div_array[1];
				row_index = div_array[2];
				class_name = div_array[3];
				var n = 0;
				var stringDiv = "";
				order = ui.item.index();
				$(this).children().each(function(i) {
				    var li = $(this);
				    div_prev_id = li.attr("id");
					if(div_prev_id.indexOf('sample_div') < 0){
	   				    new_id = div_prev_id.split('-');
					    div_class_name = li.attr('class');
					    if(div_class_name.indexOf('col-xs-offset') >= 0) {
						li.removeClass(class_name);
					    }
					    stringDiv += new_id[1] + '=' + i + '&';
					    if(i == 0) {
						li.addClass(class_name);
					    }
					}	
				});
			//console.log(stringDiv);
	    		$.ajax({
			    type: "POST", 
			    url: "/save_new_position",
			    data: {order: stringDiv},
			    success: function(response) {
				
			    }
			});
		}
	    });
    $( ".button-div" ).sortable().disableSelection();
   //$(".button-div").sortable("option", "cancel", ':input,button,a');
    $(document).on('click','.modbtn',function(e){
	if($(this).hasClass('btn-info')) {
	    if ($(this).parent().hasClass('noclick')) {
		$(this).parent().removeClass('noclick');
	    }else {
		$('input[type=text]').bind('mousedown.ui-disableSelection selectstart.ui-disableSelection', function(event) {
		      event.stopImmediatePropagation();
		})
		$('#key_edit_modal_'+$(this).data('id')).modal('show');
	    }
	}
    });

    $(".view-qr").click(function(event) {
        event.preventDefault();
        var url = $(this).data('nav-url');
        var win = window.open(url, '_blank');
        win.focust();
    });

    $(".edit-keyboard").click(function(event){
        event.preventDefault();
        $(".keypress:not(.shift-btn)").unbind("click");
        if($(this).hasClass("btn-primary")){
           $(this).removeClass("btn-primary");
           $(this).addClass("btn-success");
           $(this).text("Done");
	   $('.samplediv').removeClass('ui-sortable-handle');
	   $(".addition").show();
	   $(".remove").show();
	   $(".shift-space-row").hide();
           $(".type-area").hide();
           $(".long").hide();
	   $('.button-div').addClass('whenEdit');
           $(".keypress:not(.shift-btn)").removeClass('btn-default');
           $(".keypress:not(.shift-btn)").addClass('btn-info');
           $(".keypress:not(.shift-btn)").click(function(){
               $($(this).data("target")).modal('show');
           });
	   
	   
       } else {
           $(this).removeClass("btn-success");
           $(this).addClass("btn-primary");
           $(this).text("Edit Keyboard");
           $(".shift-space-row").show();
           $(".type-area").show();
           $(".long").show();
	   $(".addition").hide();
	    $(".remove").hide();
           $(".keypress:not(.shift-btn)").addClass('btn-default');
           $(".keypress:not(.shift-btn)").removeClass('btn-info');
           $(".keypress:not(.shift-btn)").click(btnClick);
       }
        return false;
    });

	

};


jQuery(document).ready(ready);
jQuery(document).on('page:load', ready);
