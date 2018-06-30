<?php
if(isset($_POST['submit']))
    {
    	// richiama il file geojson con delle geometrie presenti
		$inp = file_get_contents('../json/map.geojson');
		// decodifica il file geojson
		$tempArray = json_decode($inp, true);
		// preprara l'array strutturato come definito per i file geojson
		$feature = array(
		    'type' => 'Feature',
		    # Pass other attribute columns here
		    'properties' => array(
		        'color_qgis2leaf' => '#fff',
		        'tipo' => $_POST['tipo']
		    ),
		    'geometry' => array(
		        'type' => 'Point',
		        # Pass Longitude and Latitude Columns here
		        //riceve le coordinate "nascoste" dal popup del POI
		        'coordinates' => array($_POST['lng'], $_POST['lat'])
		    )
		);
	    # Add feature arrays to feature collection array
	    array_push($tempArray['features'], $feature);
	    // encode del vecchio file geojson e degli array da aggiungere
		$jsonData = json_encode($tempArray, JSON_NUMERIC_CHECK);
		file_put_contents('../json/map.geojson', $jsonData);
    }
?>
