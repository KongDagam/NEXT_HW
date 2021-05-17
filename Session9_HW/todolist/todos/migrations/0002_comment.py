# Generated by Django 3.2.2 on 2021-05-12 12:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('todo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='todos.todo')),
            ],
        ),
    ]
