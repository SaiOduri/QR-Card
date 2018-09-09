package com.example.frankxu.socialconnect.view;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.example.frankxu.socialconnect.R;

public class ConnectionsActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connections);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            case R.id.facebook_btn:
                Context context = getApplicationContext();
                CharSequence text = "Hello toast!";
                int duration = Toast.LENGTH_SHORT;
                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
                break;
        }
    }

    @Override
    public void onBackPressed() { super.onBackPressed(); }

}
