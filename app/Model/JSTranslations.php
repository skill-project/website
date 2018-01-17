<?php

namespace App\Model;

class JSTranslations
{
    function getJSTranslations() {

        return array(
            "currentLang"   => $GLOBALS["lang"],

            "or"    => _("or"),

            "error" => _("An error occurred"),
            "ok"    => _("Ok"),

            "panel" => array(
                "haveToBeSigned"    => _("You have to be signed in to do that!"),
                "signIn"            => _("Sign in"),
                "createAccount"     => _("Create an account"),
                "capIdealMax"       => _("The new skill has been created but for the tree of skills to remain simple, only <strong>%%%IDEAL%%%&nbsp;skills</strong> should be added to <strong>\"%%%PARENTNAME%%%\"</strong>. Please start thinking of a way to group the skills."),
                "capAlert"          => _("It's getting crowded here! Only <strong>%%%IDEAL%%%&nbsp;skills</strong> should be added to <strong>\"%%%PARENTNAME%%%\"</strong>. Please start thinking of a way to group the skills. You will not be able to add more than <strong>%%%NOMORE%%%&nbsp;skills</strong>."),
                "capNoMore"         => _("Oh dear! This is the last skill you can add to <strong>\"%%%PARENTNAME%%%\"</strong>. You have reached the hard limit of <strong>%%%NOMORE%%%&nbsp;skills</strong> (ideal maximum:&nbsp;<strong>%%%IDEAL%%%</strong>). Please think of a way to group the skills."),

                "capsDiscuss"       => _("If you think this limit is too low, please explain why in the \"Discuss\" panel and an Editor will raise it if appropriate."),
            ),

            "footer" => array(
                "searchPlaceholder" => _("SEARCH A SKILL (%s)")
            )
        );
    }
}
