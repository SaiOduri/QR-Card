package com.example.frankxu.socialconnect.view;


import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.example.frankxu.socialconnect.R;

public class ConnectionsActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connections);

        View snapchatBtn = findViewById(R.id.snapchat_btn);
        snapchatBtn.setOnClickListener(this);

        View tumblrBtn = findViewById(R.id.tumblr_btn);
        tumblrBtn.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            case R.id.snapchat_btn:
                DialogFragment snapDialog = new SnapchatDialogFragment();
                snapDialog.show(getSupportFragmentManager(), "ayy");
                break;

            case R.id.tumblr_btn:
                DialogFragment tumblrDialog = new TumblrDialogFragment();
                tumblrDialog.show(getSupportFragmentManager(), "ayy2");
                break;
        }
    }

    @Override
    public void onBackPressed() { super.onBackPressed(); }

}
