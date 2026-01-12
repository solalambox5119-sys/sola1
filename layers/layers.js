var wms_layers = [];

var format_DistrictBK_0 = new ol.format.GeoJSON();
var features_DistrictBK_0 = format_DistrictBK_0.readFeatures(json_DistrictBK_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBK_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBK_0.addFeatures(features_DistrictBK_0);
var lyr_DistrictBK_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBK_0, 
                style: style_DistrictBK_0,
                popuplayertitle: 'DistrictBK',
                interactive: true,
                title: '<img src="styles/legend/DistrictBK_0.png" /> DistrictBK'
            });
var format_MainRoad_1 = new ol.format.GeoJSON();
var features_MainRoad_1 = format_MainRoad_1.readFeatures(json_MainRoad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRoad_1.addFeatures(features_MainRoad_1);
var lyr_MainRoad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRoad_1, 
                style: style_MainRoad_1,
                popuplayertitle: 'MainRoad',
                interactive: true,
                title: '<img src="styles/legend/MainRoad_1.png" /> MainRoad'
            });
var format_police_station_2 = new ol.format.GeoJSON();
var features_police_station_2 = format_police_station_2.readFeatures(json_police_station_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_police_station_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_police_station_2.addFeatures(features_police_station_2);
var lyr_police_station_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_police_station_2, 
                style: style_police_station_2,
                popuplayertitle: 'police_station',
                interactive: true,
                title: '<img src="styles/legend/police_station_2.png" /> police_station'
            });

lyr_DistrictBK_0.setVisible(true);lyr_MainRoad_1.setVisible(true);lyr_police_station_2.setVisible(true);
var layersList = [lyr_DistrictBK_0,lyr_MainRoad_1,lyr_police_station_2];
lyr_DistrictBK_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'dcode': 'dcode', 'dname': 'dname', 'dname_e': 'dname_e', 'pcode': 'pcode', 'no_female': 'no_female', 'pname': 'pname', 'no_male': 'no_male', 'no_health': 'no_health', 'no_temple': 'no_temple', 'no_commu': 'no_commu', 'no_hos': 'no_hos', 'no_sch': 'no_sch', 'Grouping': 'Grouping', });
lyr_MainRoad_1.set('fieldAliases', {'ID': 'ID', 'Dgroup_y52': 'Dgroup_y52', 'Roadname': 'Roadname', 'Distance': 'Distance', });
lyr_police_station_2.set('fieldAliases', {'POLICE_ID': 'POLICE_ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'TEL': 'TEL', 'FAX': 'FAX', 'DCODE': 'DCODE', });
lyr_DistrictBK_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'dcode': 'TextEdit', 'dname': 'TextEdit', 'dname_e': 'TextEdit', 'pcode': 'TextEdit', 'no_female': 'TextEdit', 'pname': 'TextEdit', 'no_male': 'TextEdit', 'no_health': 'Range', 'no_temple': 'Range', 'no_commu': 'Range', 'no_hos': 'Range', 'no_sch': 'Range', 'Grouping': 'TextEdit', });
lyr_MainRoad_1.set('fieldImages', {'ID': 'TextEdit', 'Dgroup_y52': 'TextEdit', 'Roadname': 'TextEdit', 'Distance': 'TextEdit', });
lyr_police_station_2.set('fieldImages', {'POLICE_ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'TEL': 'TextEdit', 'FAX': 'TextEdit', 'DCODE': 'TextEdit', });
lyr_DistrictBK_0.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'dcode': 'no label', 'dname': 'no label', 'dname_e': 'no label', 'pcode': 'no label', 'no_female': 'no label', 'pname': 'no label', 'no_male': 'no label', 'no_health': 'no label', 'no_temple': 'no label', 'no_commu': 'no label', 'no_hos': 'no label', 'no_sch': 'no label', 'Grouping': 'no label', });
lyr_MainRoad_1.set('fieldLabels', {'ID': 'no label', 'Dgroup_y52': 'no label', 'Roadname': 'no label', 'Distance': 'no label', });
lyr_police_station_2.set('fieldLabels', {'POLICE_ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'TEL': 'no label', 'FAX': 'no label', 'DCODE': 'no label', });
lyr_police_station_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});