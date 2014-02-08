define('app/views/key_edit_dialog', ['ember'],
    /**
     *  Key Edit View
     *
     *  @returns Class
     */
    function (key_edit_dialog_html) {
        return Ember.View.extend({

            /**
             *  Properties
             */

            template: getTemplate('key_edit_dialog'),


            /**
             *
             *  Methods
             *
             */

            updateSaveButton: function () {
                if (Mist.keysController.renamingKey || !Mist.keyEditController.formReady) {
                    $('#rename-key-ok').addClass('ui-state-disabled');
                } else {
                    $('#rename-key-ok').removeClass('ui-state-disabled');
                }
            },


            /**
             *
             *  Actions
             *
             */

            actions: {


                backClicked: function () {
                    Mist.keyEditController.close();
                },


                saveClicked: function () {
                    Mist.keyEditController.save();
                }
            },


            /**
             *
             *  Observers
             *
             */

            updateSaveButtonObserver: function () {
                Ember.run.once(this, 'updateSaveButton');
            }.observes('Mist.keyEditController.formReady', 'Mist.keysController.renamingKey')
        });
    }
);
