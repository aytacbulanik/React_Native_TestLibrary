import React, {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
}
