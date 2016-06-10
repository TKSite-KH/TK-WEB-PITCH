
/**
 * Created by BlueX on 6/7/16.
 */

angular.module("TK-WEB-PITCH")
    .run( function($rootScope, $location) {

        // register listener to watch route changes
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            if ( $rootScope.loggedUser == null ) {
                // no logged user, we should be going to #login
                if ( next.templateUrl == "partials/login.html" ) {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.url("asdsa")
                }
            }
        });
    });