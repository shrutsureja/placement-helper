"""Configures logging for the application.

Sets up a logger named 'webapp' to print logging messages to the console.
Logs messages at the DEBUG level or higher.

Example log message format: 2023-11-21 15:30:00 - DEBUG - This is a debug message.
"""

import queue
from logging.handlers import QueueHandler, QueueListener

import logging
from datetime import datetime, timezone


class ColoredFormatter(logging.Formatter):
    def format(self, record):
        record.auditAt = str(datetime.fromtimestamp(record.created, timezone.utc))

        colors = {
            "levelname": COLORS.get(record.levelname, COLORS["RESET"]),
            "auditAt": COLORS.get("AUDIT_AT", COLORS["RESET"]),
        }
        colored_attrs = {
            attr: f"{colors[attr]}{getattr(record, attr)}{COLORS['RESET']}"
            for attr in colors
        }

        formatted_record = super().format(record)
        for attr, colored_value in colored_attrs.items():
            formatted_record = formatted_record.replace(
                getattr(record, attr), colored_value
            )
        return formatted_record


COLORS = {
    "AUDIT_AT": "\033[36m",
    "DEBUG": "\033[94m",
    "INFO": "\033[1;32m",
    "WARNING": "\033[33m",
    "ERROR": "\033[1;31m",
    "CRITICAL": "\033[4;1;31m",
    "REQUEST_INIT": "\033[1;96m",
    "FUNCTION_INVOKE": "\033[35m",
    "FUNCTION_RETURN": "\033[32m",
    "REQUEST_END": "\033[1;96m",
    "QUALNAME": "\033[94m",
    "RESET": "\033[0;0;37m",
}


console_format = ColoredFormatter(
    fmt=" ".join(["%(auditAt)s", "%(name)s", "%(levelname)s ", "message: %(message)s"])
)

console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)
console_handler.setFormatter(console_format)


logger = logging.getLogger("webapp")

logger.setLevel(logging.DEBUG)

log_queue = queue.Queue()

queue_handler = QueueHandler(log_queue)

logger.addHandler(queue_handler)

listener = QueueListener(log_queue, console_handler, respect_handler_level=True)

listener.start()
