---
next: false
---

# Personal Access Token

Consequuntur blanditiis sed. Culpa qui dolorem. Autem aliquam officiis. Temporibus est reprehenderit.

Eaque amet fugiat hic aut provident. Non eveniet officiis tenetur reprehenderit est qui laborum. Quidem rerum autem autem culpa possimus suscipit. Sint ducimus incidunt. Qui et qui vel quod quidem quibusdam ut sapiente sit.

Harum voluptas quod et fuga et. Molestiae illo officiis token repellendus. Modi excepturi eum cum et quam qui. Doloremque non sequi. Vero aut mollitia ad qui debitis.

```php
<?php
function verifySignature(
    string $payloadBody,
    string $sharedSecret,
    string $webhookSignature
): void
{
    $decodedSignature = base64_decode($$webhookSignature);
    $expectedSignature = hash_hmac('sha256', $payloadBody, $sharedSecret, true);
    if (!hash_equals($decodedSignature, $expectedSignature)) {
        throw new InvalidArgumentException('Webhook signature is invalid');
    }
}

try {
    // Raw webhook payload body
    $payloadBody = ''; // e.g. file_get_contents('php://input');
    // Shared webhook secret
    $sharedSecret = '';
    // Value of signature from the request headers
    $webhookSignature = '';  // e.g. $_SERVER['X_AQID_SIGNATURE'];

    verifySignature($payloadBody, $sharedSecret, $webhookSignature);
} catch (InvalidArgumentException $e) {
    // Webhook signature is invalid
    echo 'Error:' . $e->getMessage();
}
```
