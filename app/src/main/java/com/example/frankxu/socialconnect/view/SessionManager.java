package com.example.frankxu.socialconnect.view;

import android.content.Context;
import android.content.SharedPreferences;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by frankxu on 2018-09-09.
 */

public class SessionManager {

    SharedPreferences pref;
    SharedPreferences.Editor editor;

    Context context;
    int PRIVATE_MODE = 0;

    private static final String PREF_NAME = "AndroidHivePref";
    private static final String IS_OPENED ="IsOpened";
    private static final String KEY_NAME = "name";
    private static final String KEY_EMAIL = "email";


    // Constructor
    public SessionManager(Context context){
        this.context = context;
        pref = context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
        editor = pref.edit();
    }

    public void firstTimeOpened() {
        editor.putBoolean(IS_OPENED, true);
        editor.commit();
    }

    public void createLoginSession(String name, String email) {
        editor.putString(KEY_NAME, name);
        editor.putString(KEY_EMAIL, email);
        editor.commit();
    }

    public HashMap<String, String> getUserDetails() {
        HashMap<String, String> user = new HashMap<>();
        user.put(KEY_NAME, pref.getString(KEY_NAME, null));
        user.put(KEY_EMAIL, pref.getString(KEY_EMAIL, null));
        return user;
    }

    public boolean isOpened() {
        return pref.getBoolean(IS_OPENED, false);
    }

    public Map getPref() {
        return pref.getAll();
    }
}