<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

$menuItems = [
  'home' => 'Home',
  'hobbies' => 'Hobbies',
  'school' => 'School',
  'resume' => 'Resume',
  'contact' => 'Contact',
  'login' => 'Login'
];

foreach ($menuItems as $key => $label) {
    $active = ($page == $key) ? 'active' : '';
    $url = ($key == 'home') ? 'index-new.php' : "index-new.php?page=$key";
    echo "<li class='li-menu $active'><a href='$url'>$label</a></li>";
}
?>
