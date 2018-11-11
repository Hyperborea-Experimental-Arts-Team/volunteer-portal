CREATE TABLE eventTickets (
	user INT, FOREIGN KEY (user) REFERENCES users(id) ON DELETE CASCADE,
	event INT, FOREIGN KEY (event) REFERENCES events(id) ON DELETE CASCADE,
	legalFirstName VARCHAR(32),
	legalLastName VARCHAR(32),
	dateOfBirth DATE NOT NULL,
	status ENUM('none','waitlist','offered''ticketed','refused','refunded','onhold') DEFAULT 'none'
);

CREATE TABLE saleItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event INT, FOREIGN KEY(event) REFERENCES events(id) ON DELETE CASCADE,
    name VARCHAR(32),
    description VARCHAR(255),
    price DECIMAL(4,2) NOT NULL,
    currency ENUM('usd','cad') NOT NULL
);

CREATE TABLE ticketOffers (
    user INT, FOREIGN KEY(user) REFERENCES users(id) ON DELETE CASCADE,
    event INT, FOREIGN KEY(event) REFERENCES events(id) ON DELETE CASCADE,
    item INT, FOREIGN KEY(item) REFERENCES saleItems(id) ON DELETE CASCADE,
    validUntil DATETIME,
    offerType ENUM('directed','lottery') DEFAULT 'directed',
    status ENUM('open','closed')
);

CREATE TABLE saleTransactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(64),
    amount DECIMAL(4,2) NOT NULL,
    currency ENUM('usd','cad') NOT NULL,
    transactionType ENUM('sale','refund') NOT NULL
);
