/** @function generateCardHTML 
 * Generates the appropriate HTML for the supplied card data 
 * @param {object} cardData - An object describing a card 
 * @returns {string} the generated HTML 
 */
module.exports = function generateCardHTML(cardData) {
    var type = capitalize(cardData.type);
    var ret = generate + type + CardHTML(cardData);
    return ret;
}

/** @function generateAudioCardHTML
 * A helper function to generate audio card HTML 
 * @param {object} cardData - the audio card data 
 * @returns {string} the generated html 
 */
generateAudioCardHTML(cardData) {
    var html = 
        '
        <body>
        <h1 class="header">Audio Mockup</h1>
        <div id="content">
               
            <!-- put your card HTML here -->
            <h2 class="header">cardData.title</h2>
            <audio>
                <source src=cardData.source type="audio/mpeg">
            </audio>
            <p>
                cardData.description
            </p>
        </div> 
        <script src="js/final-frontier.js"></script>
        </body>
    ;
    return html;
}

/** @function generateArticleCardHTML
 * A helper function to generate article card HTML 
 * @param {object} cardData - the article card data 
 * @returns {string} the generated html 
 */
generateArticleCardHTML(cardData) {
    var html =
        <body>
        <h1 class="header">Article Mockup</h1>
        <div id="content" class="card">
               
            <!-- put your card HTML here -->            
            <h2>cardData.title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida accumsan lorem, vitae tincidunt felis luctus a. Mauris congue iaculis convallis. Vivamus vestibulum velit nunc, quis porttitor est vulputate ut. Aenean sed ligula at orci egestas scelerisque et dignissim erat. Donec dapibus fringilla odio, nec elementum turpis bibendum sed. Sed vulputate nibh eu felis sodales, sit amet auctor massa viverra. Curabitur volutpat lectus odio, tempus tristique tortor suscipit quis. Phasellus vel odio mi.</p>
            <p>Aliquam posuere arcu ac velit tristique, ut efficitur orci pellentesque. Etiam tristique, augue quis ultricies viverra, ipsum nibh pretium nunc, et faucibus justo dolor et velit. Praesent est sem, iaculis nec mattis non, lacinia eu nisi. Nulla facilisi. Nunc magna dui, posuere sit amet bibendum at, fermentum at enim. Vestibulum mollis finibus commodo. Sed porta sagittis lacus, eget egestas enim efficitur eget.</p>
            <p>Donec id placerat dui. Nulla tristique risus leo, non faucibus justo pulvinar eu. Etiam varius neque ac ultrices tempor. Curabitur lacinia nunc in tellus luctus porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac diam sit amet felis elementum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus blandit tortor nec neque tempor, id lacinia dui convallis. Quisque hendrerit tristique lorem, at laoreet lacus dictum vitae. Ut ut massa augue. Integer venenatis felis nunc, id cursus diam aliquet non. Nullam a augue purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit urna ac lacus rhoncus, eu porta massa efficitur.</p>
            <p>Cras viverra eros sagittis tempus varius. Nunc porttitor mollis dolor, nec tincidunt magna ullamcorper eget. Vivamus erat sapien, laoreet in mattis sit amet, rutrum sit amet nulla. Sed consequat risus sit amet mi faucibus vehicula. Vestibulum ac justo quis mi ornare condimentum id eu felis. Duis eu sollicitudin quam, sed facilisis tortor. Sed convallis orci at bibendum bibendum.</p>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sed ante felis. Nulla bibendum aliquam risus vel molestie. Duis eget sollicitudin elit. Etiam quis diam sit amet est commodo fringilla vel et massa. Nam pretium maximus tellus, quis rutrum leo semper vel. Ut nec elit ac sapien commodo posuere sit amet ut ligula. Aliquam odio dui, dapibus ut vulputate sed, maximus et mi. In hac habitasse platea dictumst. Phasellus et lobortis tortor. In id nunc est. Sed ipsum nunc, imperdiet ut euismod eget, imperdiet sit amet lectus. In ultricies faucibus enim nec laoreet. Nam eget nisi in odio ornare placerat nec quis ligula. Vestibulum eu orci at magna convallis posuere.</p>
            <p>Nullam sit amet sagittis sem. Vestibulum sed condimentum tortor, sit amet dapibus tellus. Duis eget tortor non lorem egestas maximus ac quis orci. Sed sed sapien posuere, porta neque a, sagittis dolor. Proin et leo vel mi ultricies bibendum. Vivamus fringilla magna orci, vitae condimentum odio blandit non. Vestibulum ac interdum mauris, vitae pharetra tortor.</p>
            <p>Ut convallis ultrices enim, eu dapibus quam ornare non. Vivamus scelerisque leo dolor, vitae commodo nisi condimentum non. Suspendisse pulvinar consequat sem, in porta justo. Maecenas a rhoncus lacus. Nunc et tincidunt lorem, at efficitur magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc suscipit magna eu lorem tempus, a imperdiet ligula consectetur. Nullam dignissim felis sit amet ante vulputate molestie. Etiam vitae malesuada orci. Etiam non varius mauris. Cras vel sollicitudin arcu, quis eleifend velit. Duis fringilla laoreet orci, nec tincidunt arcu mattis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nulla accumsan dignissim vestibulum. Integer accumsan pharetra est eu elementum. Curabitur cursus tellus ut massa feugiat mattis. Integer venenatis est at lorem pellentesque, nec blandit felis accumsan. Pellentesque ac posuere mi. Fusce posuere enim massa, id luctus urna bibendum eget. Integer rutrum eros vitae ipsum fermentum ultrices. Praesent velit quam, gravida nec sodales ut, mollis venenatis tortor. Duis ac magna eu massa euismod tincidunt sed vel purus.</p>
        </div> 
        <button type="button" id="readMoreArticle">"Read More..."</button>
        <script src="js/final-frontier.js"></script>
    </body>
}

/** @function generateGalleryCardHTML
 * A helper function to generate gallery card HTML 
 * @param {object} cardData - the gallery card data 
 * @returns {string} the generated html 
 */
generateGalleryCardHTML(cardData) {
    var html = <body>
        <h1>Gallery Mockup</h1>
        <div id="content">
               
            <!-- put your card HTML here -->
            <h2 class="header">Gallery Title</h2>
            <p>
                "Quisque nec ipsum sapien. Etiam rhoncus diam ut odio convallis suscipit. Phasellus interdum eget ipsum ac maximus. Quisque eget mattis justo. Aenean auctor, justo sollicitudin sodales mollis, augue ipsum mollis ipsum, eu ultrices quam leo non leo. Nulla non blandit nibh. Aliquam pharetra lorem at ipsum aliquet, vitae auctor urna porttitor."
            </p>
            <p>
                Curabitur eu hendrerit libero. Sed non est ut diam gravida pretium. Quisque molestie lacus sed tincidunt tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean justo elit, egestas eu justo vitae, pulvinar porta nulla. Aenean id nibh lorem. Pellentesque vitae est congue, sodales tortor rhoncus, porta dolor. Nam ac varius eros. Vivamus interdum odio in lacinia volutpat. Sed mattis eu urna eu molestie.
            </p>
            <img src="assets/0-5616x3744.jpg">
            <img src="assets/10-2500x1667.jpg">
        </div> 
        <button>See Gallery</button>
        <script src="js/final-frontier.js"></script>
    </body>
    ;
    return html;
}

/** @function generateVideoCardHTML
 * A helper function to generate video card HTML 
 * @param {object} cardData - the video card data 
 * @returns {string} the generated html 
 */
generateVideoCardHTML(cardData) {
    var html =
        <body>
        <h1 class="header">Video Mockup</h1>
        <div id="content">
               
            <!-- put your card HTML here -->
            <h2 class="header">card.title;</h2>
            <video>
                <source src=cardData.source type="video/mp4">
            </video>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, lectus eu laoreet fringilla, eros lacus dapibus ex, sed posuere erat odio vitae risus. Duis ultrices placerat neque. Duis consectetur leo lectus, ac ultrices mi egestas at. Maecenas pretium vel mi sed volutpat. Quisque at sollicitudin ligula. Pellentesque nec ullamcorper libero, ac molestie eros. Donec vel urna lacinia, elementum mi at, ornare ex. Sed sed risus libero. Cras lacinia imperdiet tincidunt. Nam pulvinar dui id sodales feugiat. Praesent enim dolor, consequat et ullamcorper id, vulputate aliquam nisl. Etiam vulputate dolor at nulla mollis volutpat. Proin eget pharetra dolor. Ut sodales sapien a dolor ultricies sagittis. Ut neque est, vulputate quis ante aliquam, consequat bibendum felis. Suspendisse nulla tellus, malesuada et interdum ut, rutrum id nulla."
            </p>
            <p>
                "Praesent dignissim ex sit amet nulla consectetur tincidunt. Praesent felis libero, consequat quis nibh et, cursus pretium massa. Sed auctor, nibh eget maximus interdum, sapien justo pharetra enim, ut egestas ligula quam at tellus. Cras ut urna laoreet, placerat ante volutpat, luctus odio. Integer ante sapien, sodales quis mollis quis, tempor vitae tellus. Aliquam et eleifend urna. Nulla sed condimentum sem, quis volutpat massa. Pellentesque eget rhoncus tortor, sed tincidunt turpis. Sed venenatis gravida sem, id sodales massa aliquet eget. Nulla rhoncus at nisl porttitor consectetur. Duis quis sollicitudin dui. Donec pharetra, tellus feugiat dapibus posuere, urna elit pulvinar sem, tempus finibus dui lectus eu erat. Morbi nibh sem, imperdiet eu consequat vitae, pretium non metus. Proin sagittis placerat sodales. Sed lobortis velit quis ante euismod sollicitudin."
            </p>
        </div> 
        <script src="js/final-frontier.js"></script>
    </body>
    ;
    return html;
}