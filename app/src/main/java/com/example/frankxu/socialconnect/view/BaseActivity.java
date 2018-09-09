package com.example.frankxu.socialconnect.view;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import com.example.frankxu.socialconnect.R;

import java.util.Map;

/**
 * Created by frankxu on 2018-09-09.
 */

public class BaseActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_splash);

        Handler handler = new Handler();
        final Context context = this;

        handler.postDelayed(new Runnable() {
            @Override
            public void run() {

                SessionManager session = new SessionManager(context);

                Map pref = session.getPref();

                Log.i("XD", ""+pref);
                Log.i("XDXDXD", ""+session.isOpened());

                Intent i;
                if (!session.isOpened()) {
                    // user is not logged in redirect him to Login Activity
                    session.firstTimeOpened();
                    i = new Intent(context, FirstActivity.class);
                } else {
                    // user is not logged in redirect him to Login Activity
                    i = new Intent(context, MainActivity.class);
                }
                // Closing all the Activities
                i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);

                // Add new Flag to start new Activity
                i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(i);

            }
        }, 0);
    }
}