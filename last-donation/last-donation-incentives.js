(function ($, ELT) {
    /**********
     * Main Functionality
     **********/

    var $participants = {};
    const $incentivesHeader = $('#incentivesHeader');
    const $incentivesBody = $('#incentivesBody');
    const $incentivesFooter = $('#incentivesFooter');

    $incentivesHeader.html("incentives: {<br/>")
    $incentivesFooter.html("}");
    ELT.settings.participantIds.forEach(function (participantId) {
        ELT.api.participantIncentives(participantId, function (result) {
            console.log(result);
            result.forEach(function (incentive) {
				var body = "    \"" + incentive.incentiveID + "\": {<br/>"
                     + "        \"incentiveText\": \"" + incentive.description + "\",<br/>"
				if (incentive.incentiveImageURL) {
					body += "        \"incentiveIcon\": \"" + incentive.incentiveImageURL + "\",<br/>"
				}
				body += "        \"incentiveSoundList\": [\"ExampleSound.ogg\"]<br/>"
                     + "    },<br/>" 
                $incentivesBody.append(body)
            });
        });
    });

})(window.jQuery, window.ELT);